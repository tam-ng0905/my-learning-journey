import sys
sys.setrecursionlimit(10**6)

T = int(input())

for i in range(T):
    N, M = map(int, input().split())
    g = [[] for a in range(N + 1)]
    visited = [0 for _ in range(N + 1)]

    for k in range(M):
        u, v = map(int, input().split())
        g[u].append(v)
    control = False

    def DFS(start, c):
        visited[start] = c
        global control

        for u in g[start]:
            if visited[u] == 0:
                DFS(u, c)
            elif visited[u] == c:
                control = True

    for a in range(1, N + 1):
        if visited[a] == 0:
            DFS(a, a)

    if control:
        print("YES")
    else:
        print("NO")
