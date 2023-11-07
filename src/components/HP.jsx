import React from "react";
import PropTypes from "prop-types";

function HP({ currentHp = 3 }) {
	switch (currentHp) {
	case 1:
		return (
			<div className="flex">
				<i className="nes-icon heart is-medium is-dark" />
				<i className="nes-icon heart is-medium is-transparent is-dark" />
				<i className="nes-icon heart is-medium is-transparent is-dark" />
			</div>
		);
	case 2:
		return (
			<div className="flex">
				<i className="nes-icon heart is-medium is-dark" />
				<i className="nes-icon heart is-medium is-dark" />
				<i className="nes-icon heart is-medium is-transparent is-dark" />
			</div>
		);
	case 3:
		return (
			<div className="flex">
				<i className="nes-icon heart is-medium is-dark" />
				<i className="nes-icon heart is-medium is-dark" />
				<i className="nes-icon heart is-medium is-dark" />
			</div>
		);
	default:
		return <div className="flex" />;
	}
}

HP.propTypes = {
	currentHp: PropTypes.number.isRequired,
};

export default HP;
