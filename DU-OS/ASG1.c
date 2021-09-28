#include <stdio.h>

//Question 1
int parse_command(char *inp, int *argc, char *argv[]){
    int i = 0;
    int a = 0;
    int wordCount = 0;
    char * str;
    while(inp[i]){
        if(inp[i] && inp[i] != ' '){
            str[i] = inp[i];
            if(inp[i - 1] == ' '){
                argv[*argc] = &str[i];
//                wordCount++;
                ++*argc;
            }
        }
        if(inp[i] == ' '){
            str[i] = '\0';
        }
        if(inp[i] != ' ' && i == 0){
            argv[*argc] = &str[i];
//            wordCount = 1;
            ++*argc;
        }
        i++;
    }
    argv = &str;
//    argc = &wordCount;
//    printf("%d\n", wordCount);
    printf("%d\n", *argc);
    return 0;
};

void print_cmd_line(char *argv[], int *argc) {
    int i;
    for (i = 0; i < *argc; i++) {
        printf("%s\n",argv[i]);
    }
}


//Question 2
char* reverseString(char* str, int len){
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
    int8_t addNegative = 0;
    char* string1 = str;
    char* string2;
    int count = 0;
    char * hexNum = "ABCDEF";

    if(value < 0){
        value = value * -1;

        if(base == 10){
            addNegative = 1;
        }
    }
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
    if( addNegative == 1){
        str[count] = '-';
        count ++;
    }
    str[count] = '\0';

    return reverseString(string1, count);
}

//Question 3
enum dataTypes{intType, shortType, charType, floatType, doubleType, unsignedType, longType, unsignedCharType, unsignedIntType, unsignedShortType, unsignedLongType, longDoubleType};
void printany(void * pointer, enum dataTypes paramType){
    if(paramType == intType){
        printf("%d\n",  * ((int*)pointer));
    } else if(paramType == charType){
        printf("%c\n", * ((char*)pointer));
    } else if(paramType == doubleType){
        printf("%f\n", * ((double*)pointer));
    } else if(paramType == floatType){
        printf("%f\n", * ((float*)pointer));
    } else if(paramType == longType){
        printf("%ld\n", * ((long*)pointer));
    } else if(paramType == shortType){
        printf("%hd\n", * ((short*)pointer));
    } else if(paramType == unsignedIntType){
        printf("%u\n", * ((unsigned int*)pointer));
    } else if(paramType == unsignedLongType){
        printf("%lu\n", * ((unsigned long*)pointer));
    } else if(paramType == unsignedShortType){
        printf("%u\n", * ((unsigned short*)pointer));
    } else if(paramType == unsignedType){
        printf("%u\n", * ((unsigned*)pointer));
    }
}

//Question 4
typedef struct {
    unsigned short limit_0_15; // bits 0 (the lowest order) to 15 of limit
    unsigned short base_0_15; // bits 0 to 15 of base
    unsigned char base_16_23; // bits 16 to 23 of base
    unsigned char limit_and_flag; // bits 16 to 19 of limit and 0 to 3 of flag
    unsigned char base_24_31; // bits 24 to 31 of base

} DESC;
void populate_desc(int base, int limit, int flag, DESC *g){
    g->limit_0_15 = 0x00007FFF & limit;
    g->base_0_15 = 0x00007FFF & base;

    g->limit_and_flag = ((0x000F0000 & limit) >> 16) | ((0x7 & flag) << 4);

    g->base_16_23 = (0x00FF0000 & base) >> 16;
    g->base_24_31 = (0xFF000000 & base) >> 24;
}

int main() {

    char * test = "Hello World Here Here";
    char test1;
    char * argv[100];
    char * first = &test[0];
    int arg = 0;

    int * argc = &arg;
    parse_command(first, argc, argv);
//    printf("%d\n", argc);
    print_cmd_line(argv, argc);



    printf("%s\n",itoa(51222, &test1, 16));



    short test2 = 1232;
    printany(&test2, shortType);

    return 0;
}