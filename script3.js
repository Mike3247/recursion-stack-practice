// The Odin Project Assignment # 1:
// write a function fibs()
// that takes a number as a parameter and returns
// the all the items of the array
// of the length the number
// of values of that specified series.

// using iteration:

const fibIterative = (n) => {
    const result = [0, 1];
  
    while (result.length < n) {
      result.push(result[result.length - 2] + result[result.length - 1]);
    }
  
    return result;
  };

  console.log(fibIterative(3));
  console.log(fibIterative(8));


// using recursion:

const fibRecursive = (n, a = [0, 1]) => {
    if (a.length >= n) return a;
    return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
  };
  
  console.log(fibRecursive(3));
  console.log(fibRecursive(8));
  console.log(fibRecursive(10));
  