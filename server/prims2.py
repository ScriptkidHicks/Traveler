'''
code: This is the algorithm driving Traveler. Prim's Algorithm is implemented 
      utilizing an adjacency matrix.   
group: //TODO
author(s): Thomas Joyce
last modified: 01 Nov 2021
'''
from sys import maxsize
 
class Graph():
 
    def __init__(self, vertices):
        self.V = vertices #size of graph
        self.graph = [[0 for column in range(vertices)] #initialize the graph based off size
                    for row in range(vertices)]

    def __repr__(self): 
        return "self.graph"
    
    def __str__(self): 
        return "self.graph"
 
    def minEdge(self, currentNode, visited):
        '''
        Helper function to find the minimum edge connected to the current node
        returns the connected node with the min edge
        '''
        min_edge = maxsize
        min_node = None
        for v in range(self.V):
            #print("checking node: ", v, "edge weight: ", self.graph[currentNode][v])
            if self.graph[currentNode][v] < min_edge and visited[v] == False:
                #print("min edge before: ",min_edge)
                #print("min node before: ",min_node)
                min_node = v
                #print("min node now: ",min_node)
                min_edge = self.graph[currentNode][v]
                #print("min edge now: ",min_edge)
        return min_node
 
    def primMST(self):
        '''
        constructs the ordered route based of shortest path.
        '''
        visited = [False] * self.V # keep track of visited nodes
        visited[0] = True
        route = [0] * (self.V) # Array to store constructed route
        route[0] = 0 # First node is always the start point
        
        for i in range(self.V -1):
            currentNode = i
            u = self.minEdge(currentNode, visited)
            route[i] = u
            #print(u)
            visited[u] = True
        route.insert(0, 0) # First node is always the end point
        return route
 
def solve(matrix):
    graph = Graph(len(matrix[0]))
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            matrix[j][i] = matrix[i][j]
            if i == j:
                matrix[i][j] = maxsize
    graph.graph = matrix
    return graph.primMST()
