// codingame quiz exercises on recursion

// 1. sum all numbers up to parameter input number:
const output = sumRange(3)
console.log(output);

function sumRange(num) {
    if (num == 1) return 1;

    return num + sumRange(num - 1);
}

// 2. exponent function:

function power(base, exponent) {
    if (exponent == 0) return 1;
        return base * power(base, exponent - 1);
}

console.log(power(2, 4));

// 3. calculation of factorial:

console.log(factorial(5)); // 120

function factorial(num) {
    if(num == 1) return 1;

    return num * factorial(num - 1); // pending multiplier

}
// 4. Check all values in an array
const allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven); // false

function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} 
		return false;
	
}
// 5. Product of an array

// Write a function called productOfArray which takes in an array
// of numbers and returns the product of them all

function productOfArray(array) {
	if (array.length === 0) {
		return 1;
	}
	return array.shift() * productOfArray(array);
}
const six = productOfArray([1,2,3]);
const sixty = productOfArray([1,2,3,10]);
console.log(six, sixty);
console.log(productOfArray([]));

// Question 6: Search JS object
// Write a function called contains that searches for a value
// in a nested object. It returns true if the object contains
// that value.

function contains(obj, value) {
	for(const key in obj){
		if(typeof obj[key] === "object"){
			return contains(obj[key], value);
		}if (obj[key] === value){
			return true;
		}
	}
	return false;
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: "foo2"
                    }
                }
            }
        }
    }
}

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

// Question 7: Parse a multi-dimensional array:
// Given a multi-dimensional integer array, return
// the total number of integers stored inside this array

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	const first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

const zero = totalIntegers([]);
console.log(zero);
const three = totalIntegers([[1, 2, 4], ["foo"], [3]]);
console.log(three);
const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);

// Question 8:
// Write a function that sums squares of numbers in list
// that may contain more lists

function sumSquares(array) {
	if (array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++) {
		if(Array.isArray(array[i])) {
			total += sumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
	}
	return total;
};


let l = [1,2,3];
console.log(Array.isArray(l[0]));
console.log(Array.isArray(l[1]));
console.log(l.length);
console.log(sumSquares(l)); // 1 + 4 + 9 = 14


l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400


// Question 9:
// The function should return an array containing repetitions
// of the number argument. For instance, replicate(3, 5) should return
// [5,5,5]. If the times argument is negative, return an empty array.

function replicate(repetitions, number) {
	if (repetitions <= 0) return [];
	return [number].concat(replicate(repetitions - 1, number));
}


console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []