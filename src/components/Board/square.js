import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import './Board.css';

const Square = ({ styleLine }) => (
	<Col xs={4} sm={4} md={4} lg={4} xl={4} className={`square ${styleLine}`}>
		hola
	</Col>
);

Square.defaultProps = {
	styleLine: '',
};

Square.propTypes = {
	styleLine: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	styleLine: ownProps.styleLine,
});

export default connect(
	mapStateToProps,
	null
)(Square);
