def swap(a, b):
    temp = a
    a = b
    b = temp
    return a, b


def partition(A, low, high):
    pivot = A[len(A) - 1]
    split = low - 1
    j = low
    for j in range(high - 1):
        if A[j] <= pivot:
            split += 1
            swap(A[split], A[j])
    swap(A[split + 1], A[high])
    return split + 1


def quicksort(A, low, high):
    if low < high:
        split = partition(A, low, high)
        quicksort(A, low, split - 1)
        quicksort(A, split + 1, high)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(swap(5, 8))
    arr = [10, 8, 12, 2, 6, 102]
    n = len(arr)
    quicksort(arr, 0, n - 1)
    print(arr)
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
