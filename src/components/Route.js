import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './Board/board';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Board} />
	</Switch>
);

export default Routes;
