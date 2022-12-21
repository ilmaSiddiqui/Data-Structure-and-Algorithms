
// Javascript program to detect if a path
// exists between any two vertices
// for the given undirected graph

// Class representing a undirected
// graph using matrix representation
class Graph
{
	constructor(V)
	{
		this.V = V;
		
		// Rows may not be contiguous
		this.g = new Array(V + 1);
		for(let i = 0; i < V + 1; i++)
		{
			this.g[i] = new Array(V+1);
			
			
			// Initialize all entries
			// as false to indicate
			// that there are
			// no edges initially
			for(let j = 0; j < (V + 1); j++)
			{
				this.g[i][j] = 0;
			}
			
		}

		// Initializing node to itself
		// as it is always reachable
		for(let i = 1; i <= V; i++)
			this.g[i][i] = 1;
	}
	
	// Function to add edge between nodes
	addEdge(v, w)
	{
		this.g[v][w] = 1;
		this.g[w][v] = 1;
	}
	
	// Function to check if nodes are reachable
	isReachable(s, d)
	{
		if (this.g[s][d] == 1)
			return true;
		else
			return false;
	}
	
	// Function to compute the path
	computePaths()
	{
		// Use Floyd Warshall algorithm
		// to detect if a path exists
		for(let k = 1; k <= this.V; k++)
		{
			
			// Try every vertex as an
			// intermediate vertex
			// to check if a path exists
			for(let i = 1; i <= this.V; i++)
			{
				for(let j = 1; j <= this.V; j++)
					this.g[i][j] = this.g[i][j] | ((this.g[i][k] != 0 &&
							this.g[k][j] != 0) ? 1 : 0);
			}
		}
	}

}

// Driver code
let _g = new Graph(4);
	_g.addEdge(1, 2);
	_g.addEdge(2, 3);
	_g.addEdge(1, 4);
	_g.computePaths();

	let u = 4, v = 3;
	if (_g.isReachable(u, v))
		document.write("Yes<br>");
	else
		document.write("No<br>");

// This code is contributed by unknown2108

