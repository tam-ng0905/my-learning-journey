#include <stdio.h>
//int parse_command(char *inp, int * argc, char * argv[]){
//    for(int i = 0; &inp[i] != "\0"; i++ ){
////        printf("%c\n", inp[i]);
//    }
//
//    return *argc;
//};



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

    char * test = "Hello World Hello Again";
    char c = 'Z';
    char a[] = "Hello World";

//    printf("%c\n", &c);
//
//    char *ptr1 = &c;
//    char *ptr2 = &a[0];
//    printf("%c\n", *ptr1);
//    printf("%c\n", *ptr2);

    printf("%d\n", *test);
    printf("%lu\n", (sizeof(test)/sizeof(*test)));


    for(int i = 0; i < *test; i++ ){
        printf("%c", test[i]);
    }
    return 0;
}