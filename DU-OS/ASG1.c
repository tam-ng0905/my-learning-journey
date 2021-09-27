#include <stdio.h>
int parse_command(char *inp, int *argc, char *argv[]){
    int i = 0;
    int a = 0;
    while(inp[i]){
        if(i == 0){
            ++*argc;
            argv[a] = &inp[i];
            a++;
        }
        if(inp[i] == ' ' && inp[i+1]) {
            ++*argc;
            argv[a] = &inp[i+1];
            a++;
        }
        i++;
    }
    return 0;
};

void print_cmd_line(char *argv[], int *argc) {
    int i;
    for (i = 0; i < *argc; i++) {
        printf("%s\n",argv[i]);
    }
}

char* reverseStr(char* str, int len){
    int i = 0;
    int j = 0;

    char* start = str;
    char* end = start + len - 1;
    char temp;

    while(str[j] != '\0'){
        j++;
    }

    while(i < j){
        temp = *start;
        *start = *end;
        *end = temp;
        i++; j--;
        start++; end--;
    }

    return str;
}
char *itoa(int value, char *str, int base){

    char* string1 = str;//(char*) malloc(100 * (sizeof(char)));
//    char* string2; //= (char*) malloc(100 * (sizeof(char)));
    int count = 0;
    char * hexNum = "ABCDEF";
    printf("%d", count);
    while(value > 0 ){
        if(base <= 10){
            str[count] = (value % base) + '0';
        } else if(base > 10){
            if((value % base) > 9){
                str[count] = (hexNum[(value % base) - 10]);
            } else {
                str[count] = (value % base) + '0';
            }
        }
        value = value/base;
        count++;
    }
    str[count] = '\0';


    return reverseStr(string1, count);
};

void printany(void *para){

}

typedef struct {
    unsigned short limit_0_15; // bits 0 (the lowest order) to 15 of limit unsigned short base_0_15; // bits 0 to 15 of base
    unsigned char base_16_23; // bits 16 to 23 of base
    unsigned char limit_and_flag; // bits 16 to 19 of limit and 0 to 3 of flag
    unsigned char base_24_31; // bits 24 to 31 of base
} DESC;

void populate_desc(int base, int limit, int flag, DESC *g){

}


int main() {

    char test[] = "Hello World";
    char * argv[100];
    char * first = &test[0];
    int arg = 0;
    int * argc = &arg;
    char test1;

//    parse_command(first, argc, argv);
//    printf("%c\n",*argv[0]);
//    print_cmd_line(argv, argc);

    printf("%s\n",itoa(512, &test1, 16));
    return 0;
}