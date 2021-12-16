MAX = 100
V = None
E = None
visited = [False for i in range(MAX)]
path = [0 for a in range(MAX)]
graph = [[] for j in range(MAX)]


def DFSRecursion(s):
    visited[s] = True
    for v in graph[s]:
        if not visited[v]:
            path[v] = s
            DFSRecursion(v)


def printPath(v, f):
    vertices = []
    u = f
    while f != -1:
        vertices.append(u)
        u = path[u]
        u -= 1


if __name__ == '__main__':
    V, E = map(int, input().split())
    for i in range(E):
        u, v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)
    s = 0
    f = 5
    for i in range(V):
        visited[i] = False
        path[i] = -1
        DFSRecursion(s)
        # printPath(s, f)
