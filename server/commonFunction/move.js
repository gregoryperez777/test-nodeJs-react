const verifyWinner = (movement) => {
	const winningPlays = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 7],
		[3, 5, 7],
	];

	let i = 0;
	let band = false;

	while (i < 8 && !band) {
		const [a, b, c] = winningPlays[i];

		if (movement.includes(a) && movement.includes(b) && movement.includes(c)) {
			band = true;
		}
		i += 1;
	}

	return band;
};

module.exports = verifyWinner;
