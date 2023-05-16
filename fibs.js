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
    const fibsArray = [];

    for (let i = 0; i <= number; i++) {
        if (i === 0) fibsArray.push(0);
        if (i === 1) fibsArray.push(1);
        // if (fibsArray.length fibsArray.push(1);
        //              fibsArray.push(2);
        
    }
    return fibsArray;
};

console.log(fibsIterative(0));
console.log(fibsIterative(1));
// console.log(fibsIterative(2));

// console.log(fibsIterative(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// console.log(fibsRecursive(8)); // [0, 1, 1, 2, 3, 5, 8, 13]