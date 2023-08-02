function compareArrays(arr1, arr2) {
	let result = false;
	if (arr1.length == arr2.length) {
		result = arr1.every((element, index) => {
			return element === arr2[index];
		});
	}
	return result;

}

function getUsersNamesInAgeRange(users, gender) {
	let genderFilter = users.filter(user => user.gender === gender);
	let sumAge = genderFilter.map((user) => user.age)
		.reduce((acc, userAge) => acc + userAge, 0);
	if (isNaN(sumAge / genderFilter.length)) {
		return 0;
	}
	return sumAge / genderFilter.length;
}