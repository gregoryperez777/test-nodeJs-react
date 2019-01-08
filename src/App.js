import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './components/Login';
import './App.css';

const App = ({ auth }) => (
	<div>
		{!auth && <Login />}

		{auth && <h1> hola </h1>}
	</div>
);

App.propTypes = {
	auth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	auth: state.ReducerLogin.auth,
});

export default connect(
	mapStateToProps,
	null
)(App);
