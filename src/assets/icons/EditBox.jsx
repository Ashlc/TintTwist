import * as React from "react";
import PropTypes from "prop-types";

function EditBox({color = "#fff", height = "24px", width = height}) {
	return <svg
		xmlns="http://www.w3.org/2000/svg"
		fill={color}
		viewBox='0 0 24 24'
		height={height}
		width={width}
	>
		<path
			fill={color}
			d="M18 2h-2v2h2V2zM4 4h6v2H4v14h14v-6h2v8H2V4h2zm4 8H6v6h6v-2h2v-2h-2v2H8v-4zm4-2h-2v2H8v-2h2V8h2V6h2v2h-2v2zm2-6h2v2h-2V4zm4 0h2v2h2v2h-2v2h-2v2h-2v-2h2V8h2V6h-2V4zm-4 8h2v2h-2v-2z"
		/>
	</svg>;
}

EditBox.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default EditBox;
