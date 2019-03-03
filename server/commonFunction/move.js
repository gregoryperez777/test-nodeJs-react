const verifyWinner = (turn, movement, countMovement) => {
	const winningPlays = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	];

	let i = 0;
	let band = false;

	while (i < 8 && !band) {
		const [a, b, c] = winningPlays[i];
		console.log('row', [a, b, c]);

		if (movement.includes(a) && movement.includes(b) && movement.includes(c)) {
			band = true;
		}
		i += 1;
	}

	if (band) {
		return {
			isWinner: band,
			winner: turn,
			winningRoute: winningPlays[i - 1],
		};
	}
	if (countMovement === 9) {
		return {
			isWinner: 'DRAW',
			winner: 0,
			winningRoute: [],
		};
	}

	return band;
};

module.exports = verifyWinner;
