import * as React from "react";
import PropTypes from "prop-types";

function EmptyHeart({color = "#fff", height = "24px", width = height}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={color}
			viewBox='0 0 24 24'
			height={height}
			width={width}			
		>
			<path
				fill={color}
				d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"
			/>
		</svg>
	);
}

EmptyHeart.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default EmptyHeart;
