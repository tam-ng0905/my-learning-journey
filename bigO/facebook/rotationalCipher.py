import math


# Add any extra import statements you may need here


# Add any helper functions you may need here


def rotationalCipher(input, rotation_factor):
    # Write your code here
    res = []
    # Loop through the string
    # if it is alphanumeric

    for i in range(len(input)):
        if input[i].isdigit():
            tmp = (int(input[i]) + rotation_factor) % 10
            res.append(str(tmp))
        elif input[i].isalpha():
            asciiValue = ord(input[i])
            if input[i].isupper():
                valueToMove = rotation_factor % 26
                asciiValue += valueToMove
                if asciiValue > ord('Z'):
                    tmp = asciiValue - ord('Z') + (ord('A') - 1)
                    res.append(chr(tmp))
                else:
                    res.append(chr(asciiValue))
            else:
                valueToMove = rotation_factor % 26
                asciiValue += valueToMove
                if asciiValue > ord('z'):
                    tmp = asciiValue - ord('z') + (ord('a') - 1)
                    res.append(chr(tmp))
                else:
                    res.append(chr(asciiValue))
        else:
            res.append(input[i])

    return "".join(res)


# These are the tests we use to determine if the solution is correct.
# You can add your own at the bottom.

def printString(string):
    print('[\"', string, '\"]', sep='', end='')


test_case_number = 1


def check(expected, output):
    global test_case_number
    result = False
    if expected == output:
        result = True
    rightTick = '\u2713'
    wrongTick = '\u2717'
    if result:
        print(rightTick, 'Test #', test_case_number, sep='')
    else:
        print(wrongTick, 'Test #', test_case_number, ': Expected ', sep='', end='')
        printString(expected)
        print(' Your output: ', end='')
        printString(output)
        print()
    test_case_number += 1


if __name__ == "__main__":
    input_1 = "All-convoYs-9-be:Alert1."
    rotation_factor_1 = 4
    expected_1 = "Epp-gsrzsCw-3-fi:Epivx5."
    output_1 = rotationalCipher(input_1, rotation_factor_1)
    check(expected_1, output_1)

    input_2 = "abcdZXYzxy-999.@"
    rotation_factor_2 = 200
    expected_2 = "stuvRPQrpq-999.@"
    output_2 = rotationalCipher(input_2, rotation_factor_2)
    check(expected_2, output_2)

    # Add your own test cases here