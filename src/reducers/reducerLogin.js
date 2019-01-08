import {
	LOGIN, LOGOUT, SET_EMAIL, SET_PASSWORD
} from '../actions/actionsLogin';

const initialState = {
	auth: Boolean(localStorage.getItem('token')),
	error: false,
	email: '',
	password: '',
};

const ReducerLogin = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				email: '',
				password: '',
				auth: true,
			};

		case LOGOUT:
			return {
				...state,
				auth: false,
			};

		case SET_EMAIL:
			return {
				...state,
				email: action.payload.email,
			};

		case SET_PASSWORD:
			return {
				...state,
				password: action.payload.password,
			};
		default:
			return state;
	}
};

export default ReducerLogin;
