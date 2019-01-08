import React from 'react';
import { Container, Row } from 'reactstrap';
import Square from './square';


const Board = () => (
	<Container>
		<Row>
			<Square />
			<Square />
			<Square />
		</Row>

		<Row>
			<Square />
			<Square />
			<Square />
		</Row>

		<Row>
			<Square />
			<Square />
			<Square />
		</Row>
	</Container>
);

export default Board;
