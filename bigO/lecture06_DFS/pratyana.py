import sys
sys.setrecursionlimit(10**6)

T = int(input())

for i in range(T):
    N = int(input())
    E = int(input())
    graph = [[] for _ in range(N)]
    cnt = 0
    visited = [False for _ in range(N)]
    for a in range(E):
        u, v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)

    def DFS(start):
        visited[start] = True
        for v in graph[start]:
            if not visited[v]:
                DFS(v)

    for a in range(N):
        if not visited[a]:
            DFS(a)
            cnt += 1

    print(cnt)




