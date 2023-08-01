"use strict";

function getArrayParams(...arr) {
	if (arr.length < 1) {
		return 0;
	}

	let min = Math.min.apply(null, arr);
	let max = Math.max.apply(null, arr);
	let sum = arr.reduce(function(accumulator, currentValue, index, array) {
		return accumulator + currentValue;
	});
	let avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};


}

function summElementsWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}

	let sum = arr.reduce(function(accumulator, currentValue, index, array) {
		return accumulator + currentValue;
	});

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}

	let min = Math.min.apply(null, arr);
	let max = Math.max.apply(null, arr);
	let dif = max - min;

	return dif;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;
	let newArr = [];
	for (let i = 0; i <= arrOfArr.length - 1; i++) {
		newArr.push(func(...arrOfArr[i]));
	}
	for (let j = 0; j <= newArr.length - 1; j++) {
		if (maxWorkerResult < newArr[j]) {
			maxWorkerResult = newArr[j];
		}
	}
	return maxWorkerResult;
}