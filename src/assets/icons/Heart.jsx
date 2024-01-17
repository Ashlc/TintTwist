import * as React from "react";
import PropTypes from "prop-types";

function Heart({color = "#fff", height = "24px", width = height}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			fill={color}
			viewBox='0 0 24 24'
			height={height}
			width={width}
		>
			<path
				d="M21 6v6h2V6Zm-2 8h2v-2h-2Zm2-8V4h-2v2Zm-4 10h2v-2h-2Zm2-14h-4v2h4Zm-4 16h2v-2h-2Zm-2 2h2v-2h-2Zm2-16h-2v2h2Zm-4 18h2v-2h-2Zm2-14V6h-2v2ZM9 18v2h2v-2Zm2-12V4H9v2ZM7 16v2h2v-2ZM9 2H5v2h4ZM5 14v2h2v-2Zm-2-2v2h2v-2Zm2-8H3v2h2ZM1 6v6h2V6Z"
				style={{
					fill: {color},
				}}
				transform="translate(-1 -2)"
			/>
			<path
				d="M20 4v6h-2v2h-2v2h-2v2h-2v2h-2v-2H8v-2H6v-2H4v-2H2V4h2V2h4v2h2v2h2V4h2V2h4v2h2z"
				style={{
					fill: "#e74c3c",
				}}
			/>
		</svg>
	);
}

Heart.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};


export default Heart;
