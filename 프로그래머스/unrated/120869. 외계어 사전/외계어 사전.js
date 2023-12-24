function solution(spell, dic) {
	let checkArray = [];
	const spellSet = new Set(spell);
	dic.forEach((word) => {
		const wordSet = new Set(word);
		areSetsEqual(spellSet, wordSet)
			? checkArray.push(true)
			: checkArray.push(false);
	});

	return checkArray.includes(true) ? 1 : 2;
}

function areSetsEqual(set1, set2) {
	if (set1.size !== set2.size) {
		return false;
	}

	for (let item of set1) {
		if (!set2.has(item)) {
			return false;
		}
	}

	return true;
}