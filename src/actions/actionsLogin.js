import fetch from 'isomorphic-fetch';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const login = () => ({
	type: LOGIN,
	payload: {
		description: LOGIN,
	},
});

export const logout = () => {
	localStorage.removeItem('token');

	return {
		type: LOGOUT,
		payload: {
			description: LOGOUT,
		},
	};
};

export const setEmail = email => ({
	type: SET_EMAIL,
	payload: {
		type: SET_EMAIL,
		email,
	},
});

export const setPassword = password => ({
	type: SET_PASSWORD,
	payload: {
		type: SET_PASSWORD,
		password,
	},
});

export const requestLogin = (email, password) => {
	const query = '/login';
	const data = {
		email,
		password,
	};
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	return (dispatch) => {
		fetch(query, options)
			.then(response => response.json())
			.then((response) => {
				if (response.ok) {
					localStorage.setItem('token', response.token);
					dispatch(login());
				}
			})
			.catch(e => e);
	};
};
