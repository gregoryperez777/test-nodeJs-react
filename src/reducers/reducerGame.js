import { EXECUTE_PLAY } from '../actions/actionGame';

const initialState = {
	turn: 1,
	plays: [],
};

const ReducerGame = (state = initialState, action = {}) => {
	switch (action.type) {
		case EXECUTE_PLAY:
			return {
				...state,
				turn: action.payload.turn,
				plays: [...state.plays, action.payload.played],
			};

		default:
			return state;
	}
};

export default ReducerGame;
