// Merge Sort Assignment:

// solution from 'Lofty-Brambles':

const mergeSortRec = (arr) => {
	if (arr.length === 0) return "Please provide a non empty array!"
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	return merge(mergeSortRec(left), mergeSortRec(right));
};

const merge = (leftArr, rightArr) => {
	// To merge the both incoming arrays
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

	while (iL < leftArr.length) {
		result.push(leftArr[iL]);
		iL++;
	}

	while (iR < rightArr.length) {
		result.push(rightArr[iR]);
		iR++;
	}

	return result;
};

console.log(mergeSortRec([])) // []
console.log(mergeSortRec([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55])); // [10, 20, 22, 30, 33, 50, 55]

// solution from 'fcasibu' in github (nevz in theodinproject):

function mergeSort(a) {
    if (a.length === 1) return a;
    const mid = Math.trunc(a.length / 2);
    const left = mergeSort(a.slice(0, mid));
    const right = mergeSort(a.slice(mid));
    const result = [];
  
    ((l, r) => {
      let i = 0;
        let j = 0;
  
      while (i < l.length && j < r.length) {
        l[i] < r[j] ? result.push(l[i++]) : result.push(r[j++]);
      }
      while (i < l.length) result.push(l[i++]);
      while (j < r.length) result.push(r[j++]);
    })(left, right);
  
    return result;
  }
  
  const random = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 100)
  );
  
  console.log(mergeSort(random));