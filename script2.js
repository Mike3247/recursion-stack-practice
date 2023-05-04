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

// Check all values in an array

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


