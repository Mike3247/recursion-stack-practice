// Assignment 2

// Build a function mergeSort that takes in an array and returns
// 	a sorted array, using a recursive merge sort methodology.
// Tips:
// 	Think about what the base case is and what behavior is happening
// 	again and again and can actually be delegated to someone else
// 	(e.g. that same method!).
// 	It may be helpful to check out the background videos again if you
// 	don’t quite understand what should be going on.


function mergeSort (arr) {
	if (arr.length === 0) return "This function works with value-containing arrays"
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length/2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	return merge(mergeSort(left), mergeSort(right));
};

function merge (leftArr, rightArr) {
	// to merge both incoming arrays
	const result = [];

	let iL = 0;
	let iR = 0;

	while (iL < leftArr.length && iR < rightArr.length) {
		if (leftArr[iL] < rightArr[iR]) {
			result.push(leftArr[iL]);
			iL++;
		} else {
			result.push(rightArr[iR]);
			iR++;
		}
	}
		while (iL < leftArr.length) { // does at least 1 value
		result.push(leftArr[iL]);     // remains unpushed from
		iL++;						  // leftArr ? if yes, then 
	}								  // add the next value of leftArr to result
		while (iR < rightArr.length) {
		result.push(rightArr[iR]);
		iR++;
	}

	return result;
};

const emptyArray = [];
const singleValueArray = [5];
const twoValuesArray = [3, 2];
const threeValuesArray = [4, 3, 2];
// left = [4];
// right = [3, 2];
// leftArr[0] = 4;
// rightArr[0] = 3;
// result = [3]
// iL = 0; iR = 1;
// result = [3, 4]; iL = 1;
// result = [3, 4, 2]; iR = 2;


const fourValuesArray = [4, 3, 7, 5];
console.log(Math.floor(fourValuesArray.length/2));
// left = [4, 3]; right = [7, 5];
// leftArray.length = 2; rightArray.length = 2;
// leftArr[0] = 4; rightArr[0] = 7;
// result = [4], iL = 1;
// result = [4, 3], iL = 2;
// result = [4, 3, 7], iR = 1; result = [4, 3, 7, 5], iR = 2;



const arrayToSort = [5, 9, 6, 4, 3, 0, 2, 7, 5, 4];
const arrayForTests = [1, 2, 3, 4, 5];
console.log(Math.floor(arrayForTests.length/2));
console.log(Math.floor(threeValuesArray.length/2));
console.log(mergeSort(emptyArray));
console.log(mergeSort(singleValueArray));
console.log(mergeSort(twoValuesArray));

console.log(mergeSort(threeValuesArray));

// case studying
console.log(mergeSort(fourValuesArray));
// this ^
console.log(mergeSort(arrayToSort));






// // Merge Sort Assignment:

// // solution from 'Lofty-Brambles':

// const mergeSortRec = (arr) => {
// 	if (arr.length === 0) return "Please provide a non empty array!"
// 	if (arr.length === 1) return arr;

// 	const mid = Math.floor(arr.length / 2);
// 	const left = arr.slice(0, mid);
// 	const right = arr.slice(mid, arr.length);

// 	return merge(mergeSortRec(left), mergeSortRec(right));
// };

// const merge = (leftArr, rightArr) => {
// 	// To merge the both incoming arrays
// 	const result = [];

// 	let iL = 0;
// 	let iR = 0;

// 	while (iL < leftArr.length && iR < rightArr.length) {
// 		if (leftArr[iL] < rightArr[iR]) {
// 			result.push(leftArr[iL]);
// 			iL++;
// 		} else {
// 			result.push(rightArr[iR]);
// 			iR++;
// 		}
// 	}

// 	while (iL < leftArr.length) {
// 		result.push(leftArr[iL]);
// 		iL++;
// 	}

// 	while (iR < rightArr.length) {
// 		result.push(rightArr[iR]);
// 		iR++;
// 	}

// 	return result;
// };

// console.log(mergeSortRec([])) // []
// console.log(mergeSortRec([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
// console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55])); // [10, 20, 22, 30, 33, 50, 55]

// // solution from 'fcasibu' in github (nevz in theodinproject):

// function mergeSort(a) {
//     if (a.length === 1) return a;
//     const mid = Math.trunc(a.length / 2);
//     const left = mergeSort(a.slice(0, mid));
//     const right = mergeSort(a.slice(mid));
//     const result = [];
  
//     ((l, r) => {
//       let i = 0;
//         let j = 0;
  
//       while (i < l.length && j < r.length) {
//         l[i] < r[j] ? result.push(l[i++]) : result.push(r[j++]);
//       }
//       while (i < l.length) result.push(l[i++]);
//       while (j < r.length) result.push(r[j++]);
//     })(left, right);
  
//     return result;
//   }
  
//   const random = Array.from({ length: 50 }, () =>
//     Math.floor(Math.random() * 100)
//   );
  
//   console.log(mergeSort(random));