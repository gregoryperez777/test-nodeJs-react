import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Board.css';

const Square = () => (
	<Container>
		<Row>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-rigth-bottom'>
				hola
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-rigth-bottom'>
				hola
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-bottom'>
				hola
			</Col>
		</Row>

		<Row>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-rigth-bottom'>
				hola
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-rigth-bottom'>
				hola
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-bottom'>
				hola
			</Col>
		</Row>

		<Row>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-rigth'>
				hola
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square board-rigth'>
				hola
			</Col>
			<Col xs={4} sm={4} md={4} lg={4} xl={4} className='square'>
				hola
			</Col>
		</Row>
	</Container>
);

export default Square;
