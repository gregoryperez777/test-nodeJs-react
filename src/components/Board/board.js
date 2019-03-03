import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import { getValue, verifyThreeOnline } from '../../services/commonFunction';
import Square from './square';
import Turn from '../Turn/turn';

const Board = ({ plays, winningRoute }) => (
	<div>
		<Container>
			<Row>
				<Square
					id={1}
					styleLine='board-rigth-bottom'
					valueTurn={getValue(1, plays)}
					isThreeOnline={verifyThreeOnline(1, winningRoute)}
				/>
				<Square
					id={2}
					styleLine='board-rigth-bottom'
					valueTurn={getValue(2, plays)}
					isThreeOnline={verifyThreeOnline(2, winningRoute)}
				/>
				<Square
					id={3}
					styleLine='board-bottom'
					valueTurn={getValue(3, plays)}
					isThreeOnline={verifyThreeOnline(3, winningRoute)}
				/>
			</Row>

			<Row>
				<Square
					id={4}
					styleLine='board-rigth-bottom'
					valueTurn={getValue(4, plays)}
					isThreeOnline={verifyThreeOnline(4, winningRoute)}
				/>
				<Square
					id={5}
					styleLine='board-rigth-bottom'
					valueTurn={getValue(5, plays)}
					isThreeOnline={verifyThreeOnline(5, winningRoute)}
				/>
				<Square
					id={6}
					styleLine='board-bottom'
					valueTurn={getValue(6, plays)}
					isThreeOnline={verifyThreeOnline(6, winningRoute)}
				/>
			</Row>

			<Row>
				<Square
					id={7}
					styleLine='board-rigth'
					valueTurn={getValue(7, plays)}
					isThreeOnline={verifyThreeOnline(7, winningRoute)}
				/>
				<Square
					id={8}
					styleLine='board-rigth'
					valueTurn={getValue(8, plays)}
					isThreeOnline={verifyThreeOnline(8, winningRoute)}
				/>
				<Square
					id={9}
					valueTurn={getValue(9, plays)}
					isThreeOnline={verifyThreeOnline(9, winningRoute)}
				/>
			</Row>
		</Container>
		<Turn />
	</div>
);

Board.propTypes = {
	plays: PropTypes.array.isRequired,
	winningRoute: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	plays: state.ReducerGame.plays,
	winningRoute: state.ReducerGame.winningRoute,
});

export default connect(
	mapStateToProps,
	null
)(Board);
