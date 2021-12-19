import sys
sys.setrecursionlimit(1e6)
n, m = map(int, input().split())

graph = [[] for i in range(n + 1)]
visited = [False for a in range(n + 1)]
MAX = 1

cnt = 0

def DFS(start):
    global MAX
    global cnt
    cnt += 1
    if cnt > MAX:
        MAX = cnt
    visited[start] = True
    for v in graph[start]:
        if not visited[v]:
            DFS(v)


for i in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    # graph[v].append(u)

# print(graph)
for i in range(1, n + 1):
    # visited[i] = False
    for a in range(n + 1):
        visited[a] = False
    cnt = 0
    DFS(i)
    # path[i] = -1

# DFS(1)

# print(visited)
print(MAX)
