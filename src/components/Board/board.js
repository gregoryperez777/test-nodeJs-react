import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import getValue from '../../services/commonFunction';

import Square from './square';

const Board = ({ plays }) => (
	<Container>
		<Row>
			<Square id={1} styleLine='board-rigth-bottom' valueTurn={getValue(1, plays)} />
			<Square id={2} styleLine='board-rigth-bottom' valueTurn={getValue(2, plays)} />
			<Square id={3} styleLine='board-bottom' valueTurn={getValue(3, plays)} />
		</Row>

		<Row>
			<Square id={4} styleLine='board-rigth-bottom' valueTurn={getValue(4, plays)} />
			<Square id={5} styleLine='board-rigth-bottom' valueTurn={getValue(5, plays)} />
			<Square id={6} styleLine='board-bottom' valueTurn={getValue(6, plays)} />
		</Row>

		<Row>
			<Square id={7} styleLine='board-rigth' valueTurn={getValue(7, plays)} />
			<Square id={8} styleLine='board-rigth' valueTurn={getValue(8, plays)} />
			<Square id={9} valueTurn={getValue(9, plays)} />
		</Row>
	</Container>
);

Board.propTypes = {
	plays: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	plays: state.ReducerGame.plays,
});

export default connect(
	mapStateToProps,
	null
)(Board);
