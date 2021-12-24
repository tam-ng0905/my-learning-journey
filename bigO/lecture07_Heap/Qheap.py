from heapq import heappush, heappop

Q = int(input())
# arr = []
h = []
discard = []
for i in range(Q):
    a = list(map(int, input().split()))
    if len(a) == 2:
        if a[0] == 1:
            heappush(h, a[1])
        elif a[0] == 2:
            tmp = a[1]
            heappush(discard, tmp)
    elif len(a) == 1:
        while len(discard) > 0 and h[0] == discard[0]:
            heappop(h)
            heappop(discard)
        tmp = h[0]
        print(tmp)

