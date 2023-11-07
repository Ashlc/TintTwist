import React, {useState} from "react";
import NamePrompt from "./NamePrompt";

function Start() {
	const [nameVisible, setNameVisible] = useState(true);
	return (
		<div className="start" id="start">
			<p className="start-text">PRESS [SPACE] TO START</p>
			<p>Leave blank to keep previous name.</p>
			<NamePrompt
				visible={nameVisible}
				setVisible={setNameVisible}
			/>
		</div> 
	);
}

export default Start;