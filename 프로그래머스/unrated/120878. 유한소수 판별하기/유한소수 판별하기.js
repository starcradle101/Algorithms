function solution(a, b) {
	const gcd = getGCD(a, b);
	return isOnlyTwoAndFiveFactors(Math.floor(b / gcd)) ? 1 : 2;
}

function getGCD(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

function isOnlyTwoAndFiveFactors(number) {
	if (number === 2 || number === 5) {
		return true;
	}

	while (number % 2 === 0) {
		number /= 2;
	}
	while (number % 5 === 0) {
		number /= 5;
	}
	return number === 1;
}