import React, {useState} from "react";
import NamePrompt from "./NamePrompt";

function Start() {
	const storedName = localStorage.getItem("name");
	const [nameVisible, setNameVisible] = useState(storedName === null || storedName === "___");
	
	return (
		<div className="start" id="start">
			<p className="start-text">PRESS [SPACE] TO START</p>
			<NamePrompt
				visible={nameVisible}
				setVisible={setNameVisible}
			/>
		</div> 
	);
}

export default Start;