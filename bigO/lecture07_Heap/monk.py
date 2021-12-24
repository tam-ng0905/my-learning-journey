import heapq

N = int(input())

arr = list((map(int, input().split())))


class PQEntry:
    def __init__(self, value):
        self.value = value

    def __lt__(self, other):
        return self.value > other.value


h = []
for x in arr:
    heapq.heappush(h, PQEntry(x))
    if len(h) >= 3:
        tmp1 = heapq.heappop(h)
        tmp2 = heapq.heappop(h)
        tmp3 = heapq.heappop(h)
        print(tmp1.value * tmp2.value * tmp3.value)
        heapq.heappush(h, tmp1)
        heapq.heappush(h, tmp2)
        heapq.heappush(h, tmp3)
    else:
        print(-1)



