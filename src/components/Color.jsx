import React from "react";
import PropTypes from "prop-types";

function Color({ color, text }) {
	return (
		<p className="color" style={{ color: `${color.hex}` }}>
			{text.name.toUpperCase()}
		</p>
	);
}

Color.propTypes = {
	color: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	text: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Color;
