n, m, k = map(int, input().split())

graph = []
visited = [[False for i in range(m)] for a in range(n)]

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]
count = 0


def DFS(start, isFull):
    stack = [start]
    control = False
    visited[start[0]][start[1]] = True
    while len(stack) != 0:
        u, v = stack.pop()
        if u == 0 or u == (n - 1) or v == 0 or v == (m - 1):
            control = True
        for i in range(4):
            x, y = u + dx[i], v + dy[i]
            if x in range(n) and y in range(m):
                if isFull and not visited[x][y] and graph[x][y] == '.':
                    print("here")
                    visited[x][y] = True
                    graph[x][y] = '*'
                    stack.append((x, y))
                elif not isFull and not visited[x][y] and graph[x][y] == '.':
                    visited[x][y] = True
                    stack.append((x, y))

    if control:
        return 0
    else:
        return 1


for i in range(n):
    graph.append(list(input()))

for i in range(1, n - 1):
    for a in range(1, m - 1):
        if graph[i][a] == '.' and not visited[i][a]:
            if count < k:
                count += DFS((i, a), False)
            else:
                print("here 1")
                DFS((i, a), True)


print(count)
print(visited)
print(graph)
