import React from "react";
import PropTypes from "prop-types";
import EmptyHeart from "../assets/icons/EmptyHeart";
import Heart from "../assets/icons/Heart";


function HP({ currentHp = 3 }) {
	switch (currentHp) {
	case 1:
		return (
			<div className="flex" style={{gap: "3px"}}>
				<Heart height="45px" color="#fff" />
				<EmptyHeart height="45px" color="#fff" />
				<EmptyHeart height="45px" color="#fff" />
			</div>
		);
	case 2:
		return (
			<div className="flex" style={{gap: "3px"}}>
				<Heart height="45px" color="#fff" />
				<Heart height="45px" color="#fff" />
				<EmptyHeart height="45px" color="#fff" />
			</div>
		);
	case 3:
		return (
			<div className="flex" style={{gap: "3px"}}>
				<Heart height="45px" color="#fff" />
				<Heart height="45px" color="#fff" />
				<Heart height="45px" color="#fff" />
			</div>
		);
	default:
		return <div className="flex" style={{gap: "3px"}}>
			<EmptyHeart height="45px" color="#fff" />
			<EmptyHeart height="45px" color="#fff" />
			<EmptyHeart height="45px" color="#fff" />
		</div>;
	}
}

HP.propTypes = {
	currentHp: PropTypes.number.isRequired,
};

export default HP;
