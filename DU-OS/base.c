//
// Created by Tam Nguyen on 9/26/21.
//

#define OFFSET ('A' - 10)

//does not modify string supplied.
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

char* itoa(int value, char* str, int base){
    //saves the starting point of the array
    char* strStart = str;
    //if a negative sign should be added
    int8_t addNegative = 0;

    //if negative
    if (value < 0){
        //set to positive
        value = value * -1;

        //if the base is 10, flag for adding the negative sign
        if(base == 10){
            addNegative = 1;
        }
    }

    //
    int quotient = value;
    int remainder;

    int i = 0;

    //find remainder and quotient, and add remainder to str.
    //loop until quotient is 0.
    while( quotient != 0 ){
        remainder = quotient % base;
        quotient = quotient / base;

        //if remainder is greater than 10, we have to add a letter
        if(remainder >= 10){
            //add offset to get in ascii range of A
            str[i] = remainder + OFFSET;
        }else {
            str[i] = remainder + '0';
        }

        i++;
    }

    //add negative sign
    if(addNegative){
        str[i] = '-';
        i++;
    }

    str[i] = '\0';

    //reverse string to display in proper order
    return reverseStr(strStart, i);
}