////////////////////////////////////////////////////////
// Loads program and executes it in user mode
//

#include "kernel_only.h"


extern GDT_DESCRIPTOR gdt[6];	// from startup.S
extern TSS_STRUCTURE TSS;	// from systemcalls.c

PCB console;	// PCB of the console (==kernel)
PCB user_program; // PCB of running program
PCB *current_process; // should point to user_program before control transfer

/*** Sequential execution of a program ***/
// Loads n_sector number of sectors
// starting from sector LBA in disk and executes; 
// kernel blocks until this program finishes, a.k.a.
// single-tasking system
void run(uint32_t LBA, uint32_t n_sectors) {
	uint8_t *load_base = NULL;
	uint32_t bytes_needed;
	// request memory: we need n_sectors*512 bytes for program code;
	// we will ask for 16KB more for the user-mode and kernel-mode stacks
	bytes_needed = n_sectors*512+16384;
	load_base = (uint8_t *)alloc_memory(bytes_needed);
	if (load_base == NULL) {
		puts("run: Not enough memory.\n");
		return;
	}
	// load the program into memory
	if (!load_disk_to_memory(LBA,n_sectors,load_base)) {
		puts("run: Load error.\n");
		return;
	}
    	// Save some state information about the console in its PCB
    	// so that we return back here; the PCB of the console is defined
    	// in the beginning of this file; the PCB structure is defined in
    	// kernel_only.h.
	// TODO: Save flags in the console's PCB
//	console.cpu.eflags = current_process->cpu.eflags;
    asm volatile ("movl %%eflags,%0" : "=r"(console.cpu.eflags));
	// TODO: Save current stack pointers (ESP and EBP) in the console's PCB
//	console.cpu.esp = current_process->cpu.esp;
//	console.cpu.ebp = current_process->cpu.ebp;
    asm volatile ("movl %%esp,%0" : "=r"(console.cpu.esp));
    asm volatile ("movl %%ebp,%0" : "=r"(console.cpu.ebp));


	// save resume point: we will resume at forward label 1 (below)
	asm volatile ("movl $1f,%0" : "=r"(console.cpu.eip));
	
	// fill data in the PCB for the user program (defined in the
    	// beginning of this file)
    	// TODO: fill into user_program the following values
    	//          a) memory base
    	//          b) memory limit
    	//          c) stack segment (SS)
    	//          d) stack pointer (ESP): stack should begin from (end of process space - 4KB)
    	//          e) code segment (CS)
    	//          f) instruction pointer (EIP)
    	//          g) flags (EFLAGS)

    user_program.memory_base = (uint32_t) load_base;
    user_program.memory_limit = bytes_needed - 1;
    user_program.cpu.ss = (0x4 << 3) | 0x3;
    user_program.cpu.cs = (0x3 << 3) | 0x3;
    user_program.cpu.eip = 0//bytes_needed - 4096;
    user_program.cpu.eflags = current_process.cpu.eflags;
    user_program.cpu.esp = bytes_needed - 4096;

	current_process = &user_program;
	switch_to_user_process(current_process);
	
	// all programs execute interrupt 0xFF upon termination
	// this is where execution will resume after user program ends
	// !!BACK IN KERNEL MODE!!
	asm volatile ("1:\n");	
}

/*** Load the user program to memory ***/
bool load_disk_to_memory(uint32_t LBA, uint32_t n_sectors, uint8_t *mem) {
	uint8_t status;
	uint16_t read_count = 0;

	// read up to 256 sectors at a time
	for (;n_sectors>0;) {
		read_count = (n_sectors>=256?256:n_sectors);

		status = read_disk(LBA,(read_count==256?0:read_count),mem);
		
		if (status == DISK_ERROR_LBA_OUTSIDE_RANGE
			|| status == DISK_ERROR_SECTORCOUNT_TOO_BIG) 
			return FALSE;

		else if (status == DISK_ERROR || status == DISK_ERROR_ERR
				|| status == DISK_ERROR_DF) 
			return FALSE;

		n_sectors -= read_count;
		LBA += read_count;
		mem += 512*read_count;
	}

	return TRUE;
}

//DEFINE MASKING variable
#define bitMask_0_3 0xF
#define bitMask_0_7 0xFF
#define bitMask_0_15 0xFFFF
#define bitMask_16_19 (bitMask_0_3 << 16)
#define bitMask_16_23 (bitMask_0_7 << 16)
#define bitMask_24_31 (bitMask_0_7 << 24)
//from kernel_only.h
//  use 0xFA: for user (ring 3) code segment
//  use 0xF2: for user data segment
#define USER_MODE_CODE 0xFA
#define USER_MODE_DATA 0xF2
/*** Switch to process described by the PCB ***/
// We will use the "fastcall" keyword to force GCC to pass
// the pointer in register ECX
__attribute__((fastcall)) void switch_to_user_process(PCB *p) {
    // update TSS to tell where the kernel-mode stack begins;
    // we will use the last 4KB of the process address space
    TSS.ss0 = 0x10; // must be kernel data segment with RPL=0
    // TODO: set TSS.esp0
    TSS.esp0 = p->memory_base + p->memory_limit;
    // set up GDT entries 3 and 4
    // TODO: set user GDT code/data segment to base = p->memory_base,
    // limit = p->memory_limit, flag, and access byte (see kernel_only.h
    // for definition of the GDT structure)
    uint32_t base = p->memory_base;
    uint32_t limit = p->memory_limit;
    uint8_t flag = 0x4;
    //store bits 16_19 from  limit (shifted over 12, leaving room for 4 more bits) and bits 0_3 from flag
    gdt[3].limit_and_flag = ((limit & bitMask_16_19) >> 16) | ((flag & bitMask_0_3) << 4);
    //store bits 24_31 from base (shifted over 24 to start at 0th position)
    gdt[3].base_24_31 = (base & bitMask_24_31) >> 24;
    //store bits 0_15 from limit
    gdt[3].limit_0_15 = limit & bitMask_0_15;
    //store bits 0_15 from base
    gdt[3].base_0_15 = base & bitMask_0_15;
    //store bits 16_23 (shifted over 16) from base
    gdt[3].base_16_23 = (base & bitMask_16_23) >> 16;
    gdt[3].access_byte = USER_MODE_CODE;
    //store bits 0_15 from limit
    gdt[4].limit_0_15 = limit & bitMask_0_15;
    //store bits 0_15 from base
    gdt[4].base_0_15 = base & bitMask_0_15;
    //store bits 16_23 (shifted over 16) from base
    gdt[4].base_16_23 = (base & bitMask_16_23) >> 16;
    gdt[4].access_byte = USER_MODE_DATA;
    //store bits 16_19 from  limit (shifted over 12, leaving room for 4 more bits) and bits 0_3 from flag
    gdt[4].limit_and_flag = ((limit & bitMask_16_19) >> 16) | ((flag & bitMask_0_3) << 4);
    //store bits 24_31 from base (shifted over 24 to start at 0th position)
    gdt[4].base_24_31 = (base & bitMask_24_31) >> 24;
    // CS:EIP for instructions
    // SS: ESP for data / the stack
    // TODO: load EDI, ESI, EAX, EBX, EDX, EBP with values from
    // process p's PCB
    asm volatile ("movl %0, %%edi\n": :"m"(p->cpu.edi));
    asm volatile ("movl %0, %%esi\n": :"m"(p->cpu.esi));
    asm volatile ("movl %0, %%eax\n": :"m"(p->cpu.eax));
    asm volatile ("movl %0, %%ebx\n": :"m"(p->cpu.ebx));
    asm volatile ("movl %0, %%edx\n": :"m"(p->cpu.edx));
    asm volatile ("movl %0, %%ebp\n": :"m"(p->cpu.ebp));
    // TODO: Push into stack the following values from process p's PCB: SS,
    // ESP, EFLAGS, CS, EIP (in this order)
    asm volatile ("pushl %0\n": :"m"(p->cpu.ss));
    asm volatile ("pushl %0\n": :"m"(p->cpu.esp));
    asm volatile ("pushl %0\n": :"m"(p->cpu.eflags));
    asm volatile ("pushl %0\n": :"m"(p->cpu.cs));
    asm volatile ("pushl %0\n": :"m"(p->cpu.eip));
    // TODO: load ECX with value from process p's PCB
    asm volatile ("movl %0, %%ecx\n": :"m"(p->cpu.ecx));
    // TODO: load ES, DS, FS, GS registers with user data segment selector
    asm volatile ("pushl $0x23\n" "popl %es\n");
    asm volatile ("pushl $0x23\n" "popl %ds\n");
    asm volatile ("pushl $0x23\n" "popl %fs\n");
    asm volatile ("pushl $0x23\n" "popl %gs\n");
    // TODO: execute the IRETL instruction
    asm ("iretl\n");


}



