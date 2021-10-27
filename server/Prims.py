'''
code: This is the algorithm driving Traveler. Prim's Algorithm is implemented 
      utilizing a min-heap structure on an adjacency list.   
group: //TODO
author(s): Thomas Joyce
last modified: 26 Oct 2021
'''

from collections import defaultdict

class Edge:
    def __init__(self, val=None, a_vertex=None, b_vertex=None):
        self.weight = val
        self.a = a_vertex
        self.b = b_vertex

class EdgeMinHeap:
    def __init__(self):
        self.heap = []

    def heapify(self, index):
        minimum = index
        left = 2 * index + 1 # left(node) index
        right = 2 * index + 2 # right(node) index
        # value at left is minimum ?
        if left < len(self.heap) and self.heap[left].weight < self.heap[index].weight:
            minimum = left
        if right < len(self.heap) and self.heap[right].weight < self.heap[minimum].weight:
            minimum = right
        if minimum != index:
            self.interchange_vertex(index, minimum)

    def insert(self, edge):
        if len(self.heap) == 0:
            self.heap.append(edge)
        else:
            self.heap.append(edge)
            for i in range((len(self.heap)//2)-1, -1, -1):
                self.heapify(i)

    def delete(self):
        self.interchange_vertex(0, len(self.heap)-1) # Exchange 0th index with last index
        min_edge = self.heap.pop() # pop last element
        for i in range((len(self.heap)//2)-1, -1, -1):
            self.heapify(i)
        return min_edge

    def interchange_vertex(self, index_a, index_b):
        temp_val = self.heap[index_a].weight
        temp_a = self.heap[index_a].a
        temp_b = self.heap[index_a].b
        self.heap[index_a].weight = self.heap[index_b].weight
        self.heap[index_a].a = self.heap[index_b].a
        self.heap[index_a].b = self.heap[index_b].b
        self.heap[index_b].weight = temp_val
        self.heap[index_b].a = temp_a
        self.heap[index_b].b = temp_b

class Graph:
    def __init__(self, v_count):
        self.V = v_count
        self.graph = defaultdict(list)
        self.min_heap = EdgeMinHeap()

    def add_edge(self, u, v, weight):
        self.graph[u].append((v, weight))
        self.graph[v].append((u, weight))

    def prims_mst_util(self, visited):
        min_edge = Edge()
        min_edge.weight = float('inf')
        for u in self.graph:
            for v, weight in self.graph[u]:
                if weight < min_edge.weight:
                    min_edge.weight = weight
                    min_edge.a = u
                    min_edge.b = v
        print(self.graph)
        self.min_heap.insert(min_edge)
        edge_count = 0
        cost = 0
        order = []
        while edge_count < self.V-1:
            new_edge = self.min_heap.delete() # get a min edge(which is connected and unvisited)
            #print(f"w:{new_edge.weight}, a:{new_edge.a}, b:{new_edge.b}")
            cost += new_edge.weight # add its cost to overall cost
            order.append([new_edge.a, new_edge.b])
            edge_count += 1 # increase up the edge_count
            for u in [new_edge.a, new_edge.b]: # Iterate over the both ends of new_edge
                #if visited[u] == False or u == new_edge.a or u == new_edge.b:
                for v, weight in self.graph[u]: # Iterate over the adjacents for each end of new_edge
                    if visited[u] == False and visited[v] == False and v != new_edge.a and v != new_edge.b : # if adjacent edge is new/not_current_edge
                        self.min_heap.insert(Edge(weight, u, v)) # push it to heap
                        #visited[v] = True # Mark the adjacent visited to make it unavailable for other edges
            visited[new_edge.a] = True # mark first end of new_edge as visited
            visited[new_edge.b] = True # mark second end of new_edge as visited
            #for i in self.min_heap.heap: 
            #    print(i.weight, end=" ")
            #print()
        print("cost of traversal: ", cost)
        return order

    def mst_order(self):
        visited = [False]*self.V
        order = self.prims_mst_util(visited)
        return order

def solve(matrix):
    '''
    function: builds a graph using input matrix
    input: list[list]
    ex: [[0, 454639, 716226], [455412, 0, 795474], [717739, 811274, 0]]
    output: list[list] #this is the MST path order.
    ex: [[0,1],[1,2],[2,3],[3,4]]
    '''
    g = Graph(len(matrix))
    #print(g.V)
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if j != i:
                print("adding: ", i, j, matrix[i][j])
                g.add_edge(i, j, matrix[i][j])
    return g.mst_order()

""" 
if __name__ == "__main__":
    g = Graph(4)
    g.add_edge(0, 1, 6)
    g.add_edge(0, 2, 1)
    g.add_edge(0, 3, 2)
    g.add_edge(1, 2, 5)
    g.add_edge(1, 3, 3)
    g.add_edge(2, 3, 4)
    print("MST order:", g.mst_order())
"""
