import React from "react";
import PropTypes from "prop-types";

function Score({ score }) {
	return (
		<div 
			className="nes-container is-dark is-rounded"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "0.5rem",
				paddingBottom: "0.5rem",
				width: "5rem",
			}}
		>
			{score}
		</div>
	);
}

Score.propTypes = {
	score: PropTypes.number.isRequired,
};

export default Score;