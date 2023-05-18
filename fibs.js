// The Fibonacci Sequence, which sums each number with the one before
// it, is a great example of a problem that can be solved recursively.

// Using iteration, write a function fibs which takes a number
// and returns an array containing that many numbers from the
// fibonacci sequence. Using an example input of 8, this method
// should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another method fibsRec which solves the same problem 
// recursively. This can be done in just a couple of lines
// (or 1 if you’re crazy, but don’t consider either of these lengths
// a requirement… just get it done).

function fibsIterative(number) {
    let fibsArray = [];
    if (number === 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0, 1]
    fibsArray = [0, 1];
    
    for (let i = 2; i < number; i++) {
        fibsArray.push(fibsArray[i-2] + fibsArray[i-1]);
    }
    return fibsArray;
};

console.log(fibsIterative(0));
console.log(fibsIterative(1));
console.log(fibsIterative(2));
console.log(fibsIterative(3));
console.log(fibsIterative(4));
console.log(fibsIterative(5));
console.log(fibsIterative(6));
console.log(fibsIterative(7));
console.log(fibsIterative(8));

// console.log(fibsIterative(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// console.log(fibsRecursive(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// from luaroxy on github from theodinproject.com

// function fibs(n){
//     if (n === 1) return [0];
//     if (n === 2) return [0,1];
//     const fib=[0,1];

//     for (i=2; i<n; i++){
//         fib[i] = fib[i-1]+fib[i-2];
//     }

//     return fib;
// }

// function fibsRec(n){
//     if (n === 1) return [0];
//     if (n === 2) return [0,1];

//     return [...fibsRec(n-1), fibsRec(n-1)[n - 2] + fibsRec(n-1)[n - 3]];
// }

// console.log(fibs(8));
// console.log(fibsRec(8));