// Write a function sumTo(n)
// that calculates the sum of numbers 1 + 2 + ... + n

// recursion variant of solution:

function recursionSumTo(n) {
    if (n == 1) {
        return n;
    } 
        return n + recursionSumTo(n - 1);
    
}

// sumTo(2) yields 3

console.log(recursionSumTo(2));
console.log(recursionSumTo(3));
console.log(recursionSumTo(4));
console.log(recursionSumTo(100));

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

function arithmeticProgressionSumTo(n) {
    return n * (n +1) / 2
}
console.log(arithmeticProgressionSumTo(1));
console.log(arithmeticProgressionSumTo(2));
console.log(arithmeticProgressionSumTo(3));
console.log(arithmeticProgressionSumTo(4));
console.log(arithmeticProgressionSumTo(100));

// Calculation of factorial
// n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// Calculation of Fibonacci series at n.
// The sequence of Fibonacci numbers
// has the formula Fn = Fn-1 + Fn-2.
// In other words, the next number
// is a sum of the two preceding ones.

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      const c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(7));
console.log(fib(77));

// Output a single-linked list:
// Write a function printList(list)
// that outputs list items one-by-one.

const list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// Loop-based solution

function loopBasedLogList(list) {
    let tmp = list;
  
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  
}
  
loopBasedLogList(list);

// Recursive solution

function recursiveLogList(list) {

    console.log(list.value); // output the current item
  
    if (list.next) {
      recursiveLogList(list.next); // do the same for the rest of the list
    }
  
}
  
recursiveLogList(list);

// Output a single-linked list in the reverse order

// Loop-based solution

function recursiveLogReverseList(list) {

    if (list.next) {
      recursiveLogReverseList(list.next);
    }
  
    console.log(list.value);
  }
  
  recursiveLogReverseList(list);

// Recursive solution

function loopBasedLogReverseList(list) {
    const arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
  loopBasedLogReverseList(list);







