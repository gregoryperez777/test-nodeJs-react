import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';
import { logout } from './actions/actionsLogin';
import Login from './components/Login';
import './App.css';

const App = ({ auth, actionLogout }) => (
	<div>
		{!auth && <Login />}

		{auth && (
			<IdleTimer element={document} onIdle={() => actionLogout()} timeout={1000 * 60 * 15}>
				<h1> hola </h1>
			</IdleTimer>
		)}
	</div>
);

App.propTypes = {
	auth: PropTypes.bool.isRequired,
	actionLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	auth: state.ReducerLogin.auth,
});

const mapDispatchToProps = dispatch => ({
	actionLogout: () => dispatch(logout()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
