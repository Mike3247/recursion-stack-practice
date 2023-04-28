// Write a function sumTo(n)
// that calculates the sum of numbers 1 + 2 + ... + n

// recursion variant of solution:

function recursionSumTo(n) {
    if (n == 1) {
        return n;
    } 
        return n + sumTo(n - 1);
    
}

// sumTo(2) yields 3

// console.log(recursionSumTo(2));
// console.log(recursionSumTo(3));
// console.log(recursionSumTo(4));
// console.log(recursionSumTo(100));

// for loop variant of solution:

function iterationSumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(iterationSumTo(1));
console.log(iterationSumTo(2));
console.log(iterationSumTo(3));
console.log(iterationSumTo(4));
console.log(iterationSumTo(100));