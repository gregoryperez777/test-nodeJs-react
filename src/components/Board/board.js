import React from 'react';
import { Container, Row } from 'reactstrap';
import Square from './square';

const Board = () => (
	<Container>
		<Row>
			<Square styleLine='board-rigth-bottom' />
			<Square styleLine='board-rigth-bottom' />
			<Square styleLine='board-bottom' />
		</Row>

		<Row>
			<Square styleLine='board-rigth-bottom' />
			<Square styleLine='board-rigth-bottom' />
			<Square styleLine='board-bottom' />
		</Row>

		<Row>
			<Square styleLine='board-rigth' />
			<Square styleLine='board-rigth' />
			<Square />
		</Row>
	</Container>
);

export default Board;
