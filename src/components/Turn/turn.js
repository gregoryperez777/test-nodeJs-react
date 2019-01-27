import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Turn = () => (
	<Container>
		<Row>
			<Col className='text-right' xs={4} sm={4} md={4} lg={4} xl={4}>
				Jugador(X)
			</Col>
			<Col className='text-center' xs={4} sm={4} md={4} lg={4} xl={4}>
				Tied
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4}>
				Jugador(Y)
			</Col>
		</Row>
		<Row>
			<Col className='text-right' xs={4} sm={4} md={4} lg={4} xl={4}>
				0
			</Col>
			<Col className='text-center' xs={4} sm={4} md={4} lg={4} xl={4}>
				-
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4}>
				0
			</Col>
		</Row>
		<Row>
			<Col className='text-center' xs={12} sm={12} md={12} lg={12} xl={12}>
				Turn X || O
			</Col>
		</Row>
	</Container>
);

export default Turn;
