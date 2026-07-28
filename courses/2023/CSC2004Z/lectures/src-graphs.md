---
title: Src Graphs
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-Graphs.tex]
---
> [!warning]
> Compiled from **src-Graphs.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \graphicspath, \lstinputlisting
> The original .tex is attached above.

pdf{assets/GraphsTitle.pdf}

\graphicspath{ {./assets/} }

## Object Oriented Design

The following classes were used but provided and interact as follows:

- **GraphException**. This is used for raising an Exception that may occur whilst using a graph object, such as "Graph has negative edges" or that the text file used to create the graph is incorrectly formatted
- **Edge**. This represents an edge in the graph, storing the destination vertex of the edge and the cost of that edge. So the ***Vertex*** class is used as the destination instance variable
- **Path**. This is used to create a Path to be used in the Priority Queue in Dijkstra's Algorithm and uses ***Vertex*** to store a destination vertex and also stores the cost for that path. Each path object also uses ***Path*** to compare 2 different path objects.
- **Vertex**. This class represents a Vertex stored in the graph, storing its name, a list of edges, the cost for the shortest path and the previous vertex on the shortest path. This thus uses ***Edge*** to store a list of edges with that vertex as the start node and ***Vertex*** to store the previous vertex in the shortest path from Dijkstra's algorithm

The following classes were created/modified and interact as follows:

- **Counter**. This class is used to store *eCount* for edge access operations, *vCount* for vertex access operations and *pCount* for Priority Queue operations (insertion and deletion) used in Dijkstra's algorithm. The number of vertices for a graph and the number of edges are also stored. This class is thus used to keep track of and increment these counters whilst running Dijkstra's Algorithm and then create a text file for the stored values.
- **Graph**. This is to represent a graph with vertices and edges. The class loads data from a text file and processes the data to add the relevant vertices and edges in the graph instance. This class also has an implementation of Dijkstra's Algorithm and uses a ***Counter*** object to count the *eCount*, *vCount* and *pCount* operations in the algorithm. Since this class contains all vertices (each storing its edges), this graph is also used to get a list of valid vertices that can be used as a start node. Any vertex can be used as a start node if they connect to at least one other vertex. Therefore this class uses ***Vertex*** to store vertices in the graph, ***Path*** in a Priority Queue, ***Edge*** create edges and access edges in Dijkstra's Algorithm and GraphException to raise exceptions.
- **GraphExperiment**. This is the class used to perform the experiment and analyse the performance of Dijkstra's Algorithm. The class generates a random data set of nodes and edges and this involves generating a set of vertices by generating names, generating a set of edges for those vertices and writing the edges into a text file in the form $(A, B, n)$ where $A$ is the start node, $B$ is the end node and $n$ is the cost. The class is then also used to run Dijkstra's Algorithm and save the final output into text files. This class uses ***Vertex*** to create random vertices, and also uses ***Graph*** to create a graph object from a text file. This object runs Dijkstra's Algorithm and is used to get the performance of the algorithm

## Experiment

The performance of Dijkstra's algorithm is $O(|E|\log |V|)$ for a graph with $|E|$ edges and $|V|$ vertices using any start node, that is, the performance is equal to or better some multiple of $|E| \log |V|$ for any graph (in fact, we find that $|E| \log |V|$ is the upper bound). The goal of this experiment is to prove that this is the case. This is done by creating some test cases and running each test case multiple times, counting the number of operations Dijkstra's algorithm uses for each sub-test case and comparing the performance to the theoretical expectation $|E| \log |V|$. This is done by:

- The values for $V$ are chosen from $\{10,20,30,40,50\}$. For each of these values, the corresponding amount of vertices is generated with the name *Node..* where .. is the number of that node. For example, for 10 vertices, 10 vertex objects are created with names *Node0, Node1, ..., Node9*.
- For each of these values for $V$, we create a test case for each $E$ in $\{20,35,50,65,80\}$. This is done by using a HashMap, storing each Vertex mapped to a HashSet of linked vertices, representing the vertices that the key already has an edge to. Along with this, a list of available vertices is used to randomly determine a start node. Once the start node is obtained, the unpaired vertices are obtained using the corresponding HashSet, and thus a random end node is chosen from the list of unpaired vertices. If the start node no longer has any unpaired vertices (i.e. it has an edge to every other node), it is removed from the available list. A random cost is generated from 1-10, and this gives the 3 items needed for each edge. This is repeated $E$ times and this gets stored in a text file, representing one test case
- After the data set is generated, there are 25 test cases. For each test case, Dijkstra's algorithm is run using every node that can act as a start node (pairs to at least one other node). The counters corresponding to the result after using one specific start node are stored in a text file, and thus a text file is created for every start node possible for each case. Each test case will thus have sub-cases where each sub-case is the output for one start node. Then all the sub-cases for one test case are used to get the average counter values. After this, since there are 25 cases, there are 25 data points that are plotted. *vCount* + *eCount* + *pCount* represent the operations in an experiment number, and so this is plotted with the experiment number and compared against the graph that results from plotting $E \log V$ for each experiment number

## Results

### Files

After running the experiment, 25 test cases are created. One possible example of a test case is: (using 10 vertices and 20 edges)

    *test1.txt*
\lstinputlisting{assets/test1.txt}

Each of the 25 text files has this format. From this test case, 7 sub-cases are created for the nodes that link to other nodes (notice nodes 2,3,4,5,7,8,9 appear as start nodes). One sub-case is (using Node9 as the start vertex):

    *test1_1.txt*
\lstinputlisting{assets/test1_1.txt}

Each of these sub-cases is used to obtain the average of the counters, and the average of these counters is stored in a file called 'yActual.txt'. The theoretical bound corresponding to that test case is stored in 'yExpect.txt' and the corresponding experiment number is stored in 'xData.txt'. For this generation, the output is:
| *xData.txt* | *yActual.txt* | *yExpect.txt* |
| --- | --- | --- |
| \lstinputlisting{assets/xData.txt} ~~~~~~~~~~~~~~~~~~~~~~~~~~ | \lstinputlisting{assets/yActual.txt} ~~~~~~~~~~~~~~~~~~~ | \lstinputlisting{assets/yExpect.txt} |

~
We can see for test case 1, the average of *vCount + eCount + pCount* $= 46,42857142857143$, and $|E| \log |V| = 66,43856189774725$
~
Plotting this into a graph will show whether the theoretical bound is correct.
### Graph

#### Graph 1

The data files provided are for the graph below
{graph}

Should we run the program again, a different graph will be obtained for the actual performance. Suppose we do the following: Vertices are from $20 \to 65$ with a step of $5$, and edges between $V \to 3V$ with a step of $5$. The produced graph is
#### Graph 2

{graph2}

## Discussion of Results

The 2 graphs above show 2 lines. The orange line shows the graph plotting each experiment number against $|E| \log |V|$ for that specific test case and is the theoretical bound we wish to compare against. The blue graph is the actual performance for the randomly generated cases, plotting each experiment number to the operations performed (as described above).
Using both graphs, we see that the blue line is always below the theoretical bound for every experiment number. Some cases may look equal but in fact the theoretical bound lies above by a small margin, such as in the second graph, experiment number 20 differs by approximately 7 operations. Thus, since the blue line is the actual performance of Dijkstra's Algorithm, we have found some upper bound for Dijkstra's Algorithm. Dijkstra's Algorithm is bounded by $|E| \log |V|$ because for $f$ representing the actual graph, we have that $f(x) \le |E| \log |V| \Rightarrow f(x) \le (1)(|E| \log |V|)$ for all $x > 0$ where $x$ is the experiment number. So, by the definition of $f(x)$ being $O(g(x))$, we get that Dijkstra's Algorithm has time complexity $O(|E| \log |V|)$.

## Creativity

- When generating random edges, HashMaps and HashSets are used to increase the performance of the code with both data structures, on average, finding data in $O(1)$ time.
- When selecting a random start node, the node is selected from a list of nodes that have some unpaired vertex. This means, no matter what start node is chosen, an end node can always be chosen. This will also increase the performance of the code as you no longer need to generate a random number until a valid Vertex is hit
- The end node is selected from a list of unpaired nodes. This means the end node is always selected with the first random number generation. This, along with the point above, means the start node and end node are always found after one random number generator for each
- The efficiency of the data set generation allows for much larger outputs to be produced, such as in Graph 2 above
- For each test case, sub-test cases are created and stored in a text file
- Every node that links to another node in a test case is used as a start node in Dijkstra's algorithm. This creates the sub-case test files and then the average for each of these test cases is taken improving the reliability of the outputted data that is plotted on the graph
- The data needing to be plotted is stored in a text file, with full stops replaced with commas to easily copy into some plotter such as Excel.
- Every test case and the sub-test case is stored in a respective folder. The test cases are all stored in a 'test' folder, and the sub-test cases are all stored in an 'out' folder.
- The Makefile includes the option to automatically delete all the text files after use, by calling 'make text'. The Makefile also compiles the javadocs and creates them in a 'doc' folder, by running 'make javadoc'

## Git

\begin{BVerbatim}
0: commit bed8471c6079b5c046874b06c7642926eb4789c8
1: Author: alexcristaudo <alexcristaudo1@gmail.com>
2: Date:   Thu May 4 21:45:21 2023 +0200
3:
4: Makefile to compile classes, run the experiment, create
javadoc comments, delete class files and delete text files
5:
6: commit aac638f4848ef3bc1b64ca7846b8a5a61f6c4fc5
7: Author: alexcristaudo <alexcristaudo1@gmail.com>
8: Date:   Thu May 4 20:15:31 2023 +0200
9:
...
55: Author: alexcristaudo <alexcristaudo1@gmail.com>
56: Date:   Mon Apr 24 16:50:54 2023 +0200
57:
58: Creates 10 vertices with 20 edges randomly and saves into a
text file
59:
60: commit 58a2f58b77c609d9b0bea697c2099ede307444c2
61: Author: alexcristaudo <alexcristaudo1@gmail.com>
62: Date:   Mon Apr 24 15:26:57 2023 +0200
63:
64: Created project with initial files
\end{BVerbatim}
