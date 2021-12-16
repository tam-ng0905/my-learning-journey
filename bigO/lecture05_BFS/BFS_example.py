from queue import Queue

que = Queue()

n, m = map(int, input().split())
graph = [[] for i in range(n + 1)]

for i in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visted = [False for i in range(n + 1)]
path = [-1 for i in range(n + 1)]
que.put(1)
visted[1] = True
while not que.empty():
    u = que.get()
    for v in graph[u]:
        if not visted[v]:
            visted[v] = True
            que.put(v)
            path[v] = u

vertex = []
u = 4

while u != -1:
    vertex.append(u)
    u = path[u]

print(list(reversed(vertex)))