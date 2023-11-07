import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ percentage }) {
	return (
		<div className="pbar-container">
			<div id="progress-bar" style={{ width: `${percentage}%` }} />
		</div>
	);
}

ProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
