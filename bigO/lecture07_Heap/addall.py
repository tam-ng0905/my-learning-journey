import heapq

N = 1
while N != 0:
    h = []
    N = int(input())
    if N != 0:
        arr = list(map(int, input().split()))
        res = 0
        for i in range(len(arr)):
            heapq.heappush(h, arr[i])
        for i in range(len(arr) - 1):
            tmp1 = heapq.heappop(h)
            tmp2 = heapq.heappop(h)
            res += tmp1 + tmp2
            heapq.heappush(h, tmp1 + tmp2)
        print(res)

