export const EXECUTE_PLAY = 'EXECUTE_PLAY';

export const executePlay = (infoPlay, turn, id) => ({
	type: EXECUTE_PLAY,
	payload: {
		type: EXECUTE_PLAY,
		turn: infoPlay.newGame.turn,
		played: { turn, move: id },
		winningRoute: infoPlay.newGame.winner ? infoPlay.winningRoute : [],
	},
});

export const play = (turn, id) => (dispatch) => {
	const query = '/game/5c7c54eb57bd93286c33a7ee';
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
				dispatch(executePlay(response, turn, id));
			}
		})
		.catch(e => e);
};
