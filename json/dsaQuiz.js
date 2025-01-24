const dsaQuiz = [
    {
      question: "What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out) order?",
      options: ["Queue", "Stack", "Heap", "Graph"],
      answer: "Stack"
    },
    {
      question: "What is the time complexity of inserting an element in an unsorted array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which data structure uses FIFO (First In, First Out) order?",
      options: ["Stack", "Queue", "Array", "Tree"],
      answer: "Queue"
    },
    {
      question: "What is the space complexity of a recursive function with n levels of recursion?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which algorithm is used to find the shortest path in a weighted graph?",
      options: ["Prim's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm", "Bubble Sort"],
      answer: "Dijkstra's Algorithm"
    },
    {
      question: "What is the time complexity of traversing a linked list with n nodes?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "What is the time complexity of accessing an element in a hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
      options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
      answer: "Bubble Sort"
    },
    {
      question: "What is the height of a balanced binary search tree with n nodes?",
      options: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "Which data structure is commonly used to implement recursion?",
      options: ["Queue", "Stack", "Heap", "Graph"],
      answer: "Stack"
    },
    {
      question: "What is the worst-case time complexity of Quick Sort?",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      answer: "O(n^2)"
    },
    {
      question: "What is the best-case time complexity of Merge Sort?",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      answer: "O(n log n)"
    },
    {
      question: "Which data structure is used to represent a graph using adjacency lists?",
      options: ["Array", "Linked List", "Stack", "Queue"],
      answer: "Linked List"
    },
    {
      question: "What is the time complexity of deleting a node from a doubly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "What is the worst-case time complexity of Heap Sort?",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      answer: "O(n log n)"
    },
    {
      question: "Which data structure is used to implement Breadth-First Search (BFS)?",
      options: ["Queue", "Stack", "Heap", "Linked List"],
      answer: "Queue"
    },
    {
      question: "What is the space complexity of Depth-First Search (DFS) on a graph with n nodes?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "What is the time complexity of finding the maximum element in a binary heap?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which algorithm is used to detect a cycle in a graph?",
      options: ["Prim's Algorithm", "Dijkstra's Algorithm", "Floyd's Cycle Detection Algorithm", "Kruskal's Algorithm"],
      answer: "Floyd's Cycle Detection Algorithm"
    },
    {
      question: "What is the time complexity of inserting an element in a binary search tree?",
      options: ["O(1)", "O(n)", "O(log n)", "O(h) where h is the height of the tree"],
      answer: "O(h) where h is the height of the tree"
    },
    {
      question: "Which data structure is used in Kruskal's algorithm?",
      options: ["Priority Queue", "Disjoint Set", "Queue", "Heap"],
      answer: "Disjoint Set"
    },
    {
      question: "What is the time complexity of deleting an element in a binary search tree?",
      options: ["O(1)", "O(n)", "O(log n)", "O(h) where h is the height of the tree"],
      answer: "O(h) where h is the height of the tree"
    },
    {
      question: "Which algorithm is used for topological sorting?",
      options: ["Kahn's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm"],
      answer: "Kahn's Algorithm"
    },
    {
      question: "What is the time complexity of traversing a binary tree using in-order traversal?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which data structure is used to evaluate postfix expressions?",
      options: ["Queue", "Stack", "Heap", "Linked List"],
      answer: "Stack"
    },
    {
      question: "What is the time complexity of searching for an element in a balanced binary search tree?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(log n)"
    },
    {
      question: "Which data structure is used to implement a priority queue?",
      options: ["Heap", "Stack", "Queue", "Array"],
      answer: "Heap"
    },
    {
      question: "What is the time complexity of removing the maximum element in a max heap?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(log n)"
    },
    {
      question: "What is the best-case time complexity of Bubble Sort?",
      options: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which data structure is used in Prim's algorithm?",
      options: ["Priority Queue", "Stack", "Graph", "Heap"],
      answer: "Priority Queue"
    },
    {
      question: "What is the time complexity of searching for an element in an unsorted array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which algorithm is used to find the strongly connected components of a graph?",
      options: ["Prim's Algorithm", "Kosaraju's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm"],
      answer: "Kosaraju's Algorithm"
    },
    {
      question: "What is the time complexity of matrix multiplication for two n x n matrices?",
      options: ["O(n log n)", "O(n^2)", "O(n^3)", "O(log n)"],
      answer: "O(n^3)"
    },
    {
      question: "Which data structure is used to implement a deque?",
      options: ["Doubly Linked List", "Array", "Stack", "Queue"],
      answer: "Doubly Linked List"
    },
    {
      question: "What is the time complexity of inserting an element in a min heap?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(log n)"
    },
    {
      question: "Which algorithm is used to find the minimum spanning tree of a graph?",
      options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm"],
      answer: "Kruskal's Algorithm"
    },
    {
      question: "What is the time complexity of finding the median of an unsorted array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which data structure is used in Breadth-First Search (BFS) for a graph?",
      options: ["Stack", "Queue", "Heap", "Array"],
      answer: "Queue"
    },
    {
      question: "What is the time complexity of reversing a singly linked list with n nodes?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which sorting algorithm is stable and has O(n^2) time complexity?",
      options: ["Quick Sort", "Insertion Sort", "Merge Sort", "Heap Sort"],
      answer: "Insertion Sort"
    },
    {
      question: "What is the time complexity of searching for an element in a hash table in the worst case?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which algorithm is used to find the maximum subarray sum?",
      options: ["Dijkstra's Algorithm", "Kadane's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm"],
      answer: "Kadane's Algorithm"
    },
    {
      question: "What is the space complexity of Merge Sort?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which data structure is used to detect balanced parentheses in an expression?",
      options: ["Queue", "Stack", "Heap", "Array"],
      answer: "Stack"
    },
    {
      question: "What is the time complexity of finding the nth Fibonacci number using dynamic programming?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which algorithm is used to find all pairs shortest paths in a graph?",
      options: ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm"],
      answer: "Floyd-Warshall Algorithm"
    },
    {
      question: "What is the time complexity of finding the union of two sorted arrays?",
      options: ["O(m + n)", "O(m * n)", "O(log m + log n)", "O(1)"],
      answer: "O(m + n)"
    },
    {
      question: "Which data structure is used to implement a circular queue?",
      options: ["Array", "Doubly Linked List", "Stack", "Heap"],
      answer: "Array"
    },
    {
      question: "What is the time complexity of finding the minimum element in a stack with a minimum stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which data structure is used in Depth-First Search (DFS)?",
      options: ["Queue", "Stack", "Heap", "Graph"],
      answer: "Stack"
    },
    {
      question: "What is the time complexity of accessing the front element of a queue implemented using a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which algorithm is used to sort an array in O(n log n) in the average case?",
      options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
      answer: "Quick Sort"
    },
    {
      question: "What is the space complexity of a hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which sorting algorithm divides the array into subarrays and merges them?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"],
      answer: "Merge Sort"
    },
    {
      question: "What is the time complexity of finding the GCD using the Euclidean Algorithm?",
      options: ["O(log(min(a, b)))", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(log(min(a, b)))"
    },
    {
      question: "Which data structure allows insertion and deletion from both ends?",
      options: ["Deque", "Queue", "Stack", "Heap"],
      answer: "Deque"
    },
    {
      question: "What is the time complexity of counting sort?",
      options: ["O(n)", "O(n + k)", "O(n log n)", "O(k log n)"],
      answer: "O(n + k)"
    },
    {
      question: "Which algorithm is used to solve the 0/1 Knapsack problem using dynamic programming?",
      options: ["Floyd-Warshall", "Kruskal", "Bellman-Ford", "Knapsack DP"],
      answer: "Knapsack DP"
    },
    {
      question: "What is the time complexity of searching in a Trie?",
      options: ["O(n)", "O(length of word)", "O(log n)", "O(n^2)"],
      answer: "O(length of word)"
    }
  ];
  