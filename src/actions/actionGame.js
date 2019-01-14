export const EXECUTE_PLAY = 'EXECUTE_PLAY';

export const executePlay = (turn, id) => ({
	type: EXECUTE_PLAY,
	payload: {
		type: EXECUTE_PLAY,
		turn: turn === 1 ? 2 : 1,
		played: { turn, move: id },
	},
});

export const play = (turn, id) => (dispatch) => {
	const query = '/game';
	const data = {
		turn,
		move: id,
	};

	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			token: localStorage.getItem('token') || null,
		},
		body: JSON.stringify(data),
	};

	fetch(query, options)
		.then(response => response.json())
		.then((response) => {
			if (response.ok) {
				dispatch(executePlay(turn, id));
			}
		})
		.catch(e => e);
};
