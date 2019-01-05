import React from 'react';
import {
	Container, Col, Form, FormGroup, Label, Input, Button, Row
} from 'reactstrap';
import './App.css';

const App = () => (
	<div className='Align-login'>
		<Container className='App'>
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
						/>
					</FormGroup>
				</Col>
				<Row>
					<Col>
						<Button color='success' className='btn btn-primary btn-lg btn-block'>
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

export default App;
