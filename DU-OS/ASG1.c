#include <stdio.h>
int parse_command(char *inp, int *argc){
    int i = 0;
    printf("%d\n", argc);
    while(inp[i]){
        if(i == 0){
            ++*argc;
        }
        if(inp[i] == ' ') {
            ++*argc;
            printf("%d\n", *argc);
        }
        printf("%c\n", inp[i]);
        i++;
    }

    return 0;
};



int main() {
//    char str[6] = "hello";
//    char * argv = str;
//    int * argc = 0;
//    printf("%c\n", parse_command("hello world", argc, &argv));
//    int arr[3]= {1,2,3};
//    int *p = arr;
//    int a = 5;
//    int * b = &a;
//    printf("%d", b);
//    printf("a - %d", &a);

//    char * test = "Hello World Hello Again";
//    char c = 'Z';
//    char a[] = "Hello World";

//    printf("%c\n", &c);
//
//    char *ptr1 = &c;
//    char *ptr2 = &a[0];
//    printf("%c\n", *ptr1);
//    printf("%c\n", *ptr2);

    char test[] = "Hello World";
    char * first = &test[0];
//    printf("%lu\n", sizeof(test));
//    printf("%lu\n", sizeof(first));
    int arg = 0;
    int * argc = &arg;
    parse_command(first, argc);

//    for(int i = 0; i < *test; i++ ){
//        printf("%c", test[i]);
//    }
    return 0;
}