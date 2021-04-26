def swap(array, a, b):
    temp = array[a]
    array[a] = array[b]
    array[b] = temp


def partition(A, low, high):
    pivot = A[high]
    split = low - 1
    for j in range(low, high):
        if A[j] > pivot:
            continue
        split = split + 1
        swap(A, split, j)
    swap(A, split + 1, high - 1)
    return split + 1


def quicksort(A, low, high):
    if low < high:
        split = partition(A, low, high)
        quicksort(A, low, split - 1)
        quicksort(A, split + 1, high)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    arr = [10, 8, 12, 2, 6, 102, 122]
    n = len(arr)
    quicksort(arr, 0, n-1)
    print(arr)
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
