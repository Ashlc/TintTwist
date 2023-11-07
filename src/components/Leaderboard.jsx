/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

function Leaderboard({visible, setVisible}) {
	const currentBoard = document.cookie.split(";").find((item) => item.includes("leaderboard"));
	const parsedBoard = currentBoard ? JSON.parse(currentBoard.split("=")[1]) : [];
		
	if (visible) return (
		<div className="leaderboard">
			<div className="flex w-full"
				style={{
					justifyContent: "flex-end",
				}}>
				<button
					type="button"
					onClick={() => setVisible(false)}
					style={{
						backgroundColor: "transparent",
						border: "none",
						color: "#fff",
						fontSize: "1rem",
						padding: "0.5rem",
					}}>
					X
				</button>
			</div>
			<div className="leaderboard-frame">
				<div className="leaderboard-list">
					<p>.</p>
					<p>NAME</p>
					<p>SCORE</p>
				</div>
				{parsedBoard.map((item, index) => (
					<div className="leaderboard-list">
						<p key={`${index}_place`}>{`${index + 1}.`}</p>
						<p key={`${index}_name`}>{item.name}</p>
						<p key={`${index}_points`}>{`${item.score}`}</p>
					</div>
				))}
			</div>
		</div>
	);
}

Leaderboard.propTypes = {
	visible: PropTypes.bool.isRequired,
	setVisible: PropTypes.func.isRequired,
};

export default Leaderboard;