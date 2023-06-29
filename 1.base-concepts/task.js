"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = b ** 2 - 4 * a * c;
	let x1;
	let x2;

	if (D === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	} else if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	}
  return arr;

}





function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalMortgage = +(monthlyPayment * countMonths).toFixed(2);
	return totalMortgage;
}