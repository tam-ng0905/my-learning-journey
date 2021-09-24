#include <stdio.h>
int parse_command(char *inp, int *argc, char *argv[]){
    int i = 0;
    int a = 0;
    while(inp[i]){
        if(i == 0){
            ++*argc;
            argv[a] = &inp[i];
//            printf("%c\n", *argv[a]);
            a++;
        }
        if(inp[i] == ' ' && inp[i+1]) {
            ++*argc;
//            printf("%d\n", *argc);
//            argv[]
            argv[a] = &inp[i+1];
//            printf("%c\n", *argv[a]);
            a++;
        }
//        printf("%c\n", inp[i]);
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



int main() {

    char test[] = "Hello World";
    char * argv[100];
    char * first = &test[0];
    int arg = 0;
    int * argc = &arg;

    parse_command(first, argc, argv);
    printf("%c\n",*argv[0]);
    printf("%c\n",*argv[1]);
    print_cmd_line(argv, argc);
    return 0;
}