T = int(input())

for i in range(T):
    N, M = map(int, input().split())
    g = [[] for a in range(N)]
    for i in range(N):
        u, v = map(int, input().split())
        if u != v:
            g[u].append(v)
            g[v].append(u)


