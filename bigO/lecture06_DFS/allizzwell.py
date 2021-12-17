t = int(input())


dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
string = "ALLIZZWELL"

while True:
    R, C = map(int, input().split())
    graph = []
    visited = [[False for i in range(C)] for a in range(R)]

    for i in range(R):
        graph.append(list(input()))


    print(graph)

