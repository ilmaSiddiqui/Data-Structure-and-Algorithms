

// Javascript code to implement the
// matrix chain multiplication using recursion

// Matrix Ai has dimension p[i-1] x p[i] for i = 1..n
function MatrixChainOrder(p , i , j)
{
	if (i == j)
		return 0;

	var min = Number.MAX_VALUE;

	// Place parenthesis at different places
	// between first and last matrix,
	// recursively calculate count of multiplications
	// for each parenthesis placement
	// and return the minimum count
	var k=0;
	for (k = i; k < j; k++)
	{
		var count = MatrixChainOrder(p, i, k)
					+ MatrixChainOrder(p, k + 1, j)
					+ p[i - 1] * p[k] * p[j];

		if (count < min)
			min = count;
	}

	// Return minimum count
	return min;
}

// Driver code
var arr = [ 1, 2, 3, 4, 3 ];
var N = arr.length;

document.write(
	"Minimum number of multiplications is "
	+ MatrixChainOrder(arr, 1, N - 1));

// This code contributed by shikhasingrajput


