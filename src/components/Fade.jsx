import React from "react";
import PropTypes from "prop-types";

function Fade({children}) {
	return (
		<div className="start" style={{
			width: "100%",
			height: "100%",
			zIndex: 10  ,
		}}>
			{children}
		</div>
	);
}

Fade.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Fade;
