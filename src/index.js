import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
