const getValue = (id, plays) => {
	let i = 0;
	let band = false;
	let position = 0;

	while (i < plays.length && !band) {
		if (plays[i].move === id) {
			band = true;
			position = i;
		}
		i += 1;
	}

	if (band && plays[position]) {
		return plays[position].turn === 1 ? 'X' : '0';
	}

	return '';
};

export default getValue;
