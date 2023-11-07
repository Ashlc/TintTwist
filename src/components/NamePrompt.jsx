import React, {useState} from "react";
import PropTypes from "prop-types";

function NamePrompt({visible, setVisible}) {
	const [nameValue, setNameValue] = useState("");
	const handleSaveName = () => {
		if(nameValue !== "") localStorage.setItem("name", nameValue);
		setVisible(false);
	};
	if(visible) return (
		<div className="nes-container is-dark flex is-rounded"
			style={{gap: "10px"}}>
			<div className="nes-field">
				<input
					style={{width: "6rem", textAlign: "center"}}
					type="text"
					value={nameValue}
					onChange={(e) => setNameValue(e.target.value.toUpperCase().trim())}
					maxLength={3}
					className="nes-input is-dark"
					placeholder="ABC" />
			</div>
			<button type="button" className="nes-btn" onClick={handleSaveName}>SET NAME</button>
		</div>
	);
}

NamePrompt.propTypes = {
	visible: PropTypes.bool.isRequired,
	setVisible: PropTypes.func.isRequired,
};

export default NamePrompt;