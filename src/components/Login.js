import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
	Container, Col, Form, FormGroup, Label, Input, Button, Row
} from 'reactstrap';

import { setEmail, setPassword, requestLogin } from '../actions/actionsLogin';

const Login = ({
	email, password, actionLogin, actionSetEmail, actionSetPassword
}) => (
	<div className='Align-login'>
		<Container className='App border-login'>
			<h2>Tres en Linea</h2>
			<Form className='form'>
				<Col>
					<FormGroup>
						<Label>Email</Label>
						<Input
							type='email'
							name='email'
							id='Email'
							placeholder='myemail@email.com'
							onChange={actionSetEmail}
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label for='Password'>Password</Label>
						<Input
							type='password'
							name='password'
							id='Password'
							placeholder='********'
							onChange={actionSetPassword}
						/>
					</FormGroup>
				</Col>
				<Row className='not-margin-row'>
					<Col>
						<Button
							color='success'
							className='btn btn-primary btn-lg btn-block'
							onClick={() => actionLogin(email, password)}
						>
							Submit
						</Button>
					</Col>
					<Col>
						<Button color='primary' className='btn btn-primary btn-lg btn-block'>
							Register
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	</div>
);

Login.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	actionLogin: PropTypes.func.isRequired,
	actionSetEmail: PropTypes.func.isRequired,
	actionSetPassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	email: state.ReducerLogin.email,
	password: state.ReducerLogin.password,
});

const mapDispatchToProps = dispatch => ({
	actionLogin: (email, password) => dispatch(requestLogin(email, password)),
	actionSetEmail: e => dispatch(setEmail(e.target.value)),
	actionSetPassword: e => dispatch(setPassword(e.target.value)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
