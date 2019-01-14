import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { executePlay } from '../../actions/actionGame';
import './Board.css';

const Square = ({
	id, turn, styleLine, valueTurn, actionExePlay
}) => (
	<Col
		xs={4}
		sm={4}
		md={4}
		lg={4}
		xl={4}
		className={`square ${styleLine}`}
		onClick={() => actionExePlay(turn, id)}
	>
		{valueTurn}
	</Col>
);

Square.defaultProps = {
	styleLine: '',
	valueTurn: '',
};

Square.propTypes = {
	id: PropTypes.number.isRequired,
	turn: PropTypes.number.isRequired,
	valueTurn: PropTypes.string,
	actionExePlay: PropTypes.func.isRequired,
	styleLine: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.id,
	turn: state.ReducerGame.turn,
	valueTurn: ownProps.valueTurn,
	styleLine: ownProps.styleLine,
});

const mapDispatchToProps = dispatch => ({
	actionExePlay: (turn, id) => dispatch(executePlay(turn, id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Square);
