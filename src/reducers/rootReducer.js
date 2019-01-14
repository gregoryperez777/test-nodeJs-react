import { combineReducers } from 'redux';

import ReducerLogin from './reducerLogin';
import ReducerGame from './reducerGame';

const rootReducer = combineReducers({
	ReducerLogin,
	ReducerGame,
});

export default rootReducer;
