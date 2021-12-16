n, m = map(int, input().split())

graph = [[] for i in range(n + 1)]
visited = [False for a in range(n + 1)]
path = [-1 for j in range(n + 1)]
MAX = 1


def DFS(start):
    global MAX
    MAX = start
    visited[start] = True
    for v in graph[start]:
        if not visited[v]:
            path[v] = start
            if v > MAX:
                MAX = v
            DFS(v)


for i in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

s = 1

# TODO: ASK ABOUT WHY THIS LOOP RIGHT HERE
for i in range(n):
    # visited[i] = False
    # path[i] = -1
    DFS(i)

# DFS(s)

print(visited)
print(path)
print(MAX)
