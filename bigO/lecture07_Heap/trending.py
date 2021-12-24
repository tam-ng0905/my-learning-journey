from heapq import heappop, heappush

N = int(input())
h = []


class PQEntry:
    def __init__(self, id, score, newScore, diff):
        self.id = id
        self.score = score
        self.newScore = newScore
        self.diff = diff

    def __lt__(self, other):
        if self.diff != other.diff:
            return self.diff > other.diff
        else:
            return self.id > other.id


for i in range(N):
    _id, score, P, L, C, S = map(int, input().split())
    newScore = (P * 50) + (L * 5) + (C * 10) + (S * 20)
    diff = newScore - score
    newEntry = PQEntry(_id, score, newScore, diff)
    heappush(h, newEntry)

if N > 5:
    for i in range(5):
        tmp = heappop(h)
        print(tmp.id, tmp.newScore)
else:
    for i in range(N):
        tmp = heappop(h)
        print(tmp.id, tmp.newScore)

