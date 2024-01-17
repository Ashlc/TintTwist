import React, { useEffect, useState } from "react";
import { useGlitch } from "react-powerglitch";
import colors from "../service/ColorBank";
import Color from "../components/Color";
import "../App.css";
import HP from "../components/HP";
import ProgressBar from "../components/ProgressBar";
import Leaderboard from "../components/Leaderboard";
import Trophy from "../assets/icons/Trophy";
import EditBox from "../assets/icons/EditBox";
import Score from "../components/Score";
import Start from "../components/Start";
import NamePrompt from "../components/NamePrompt";
import Fade from "../components/Fade";

function Handler() {
	const [color, setColor] = useState({ hex: "#fff", name: "???" });
	const [text, setText] = useState({ hex: "#fff", name: "???" });
	const [hp, setHP] = useState(3);
	const [score, setScore] = useState(0);
	const [playerGuess, setPlayerGuess] = useState("");
	const [percentage, setPercentage] = useState(100);
	const [duration, setDuration] = useState(6000);
	const [intervalRef, setIntervalRef] = useState(null);
	const [startTime, setStartTime] = useState(null);
	const [gameRunning, setGameRunning] = useState(false);
	const [leaderboardVisible, setLeaderboardVisible] = useState(false);
	const [nameInputVisible, setNameInputVisible] = useState(false);
	const glitch = useGlitch(
		{
			playMode: "manual",
			timing: {
				duration: 450,
				delay: 0,
				iterations: 1
			}
		}
	);

	const handleLeaderboard = () => {
		setLeaderboardVisible(!leaderboardVisible);
	};
	
	const handleNameInput = () => {
		setNameInputVisible(!nameInputVisible);
	};

	const handleCookies = () => {
		const playerName = localStorage.getItem("name");
		const currentBoard = document.cookie.split(";").find((item) => item.includes("leaderboard"));
		if (currentBoard) {
			const parsedBoard = JSON.parse(currentBoard.split("=")[1]);
			parsedBoard.push({ name: playerName, score });
			parsedBoard.sort((a, b) => b.score - a.score);
			if(parsedBoard.length > 5) parsedBoard.pop();
			document.cookie = `leaderboard=${JSON.stringify(parsedBoard)}`;
		} else {
			document.cookie = `leaderboard=${JSON.stringify([{ name: playerName, score }])}`;
		}
		setScore(0);
	};
	
	const gameOver = () => {
		setGameRunning(false);
		setText({ hex: "#fff", name: "GAME OVER" });
		setColor({ hex: "#fff", name: "???" });
		setPlayerGuess("");
		setPercentage(100);
		setDuration(8000);
		setHP(3);
		handleCookies();
	};

	const randomColor = () => {
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	};
	
	const newRound = () => {
		setStartTime(Date.now());
		setPlayerGuess("");
		setPercentage(100);
		setColor(randomColor());
		setText(randomColor());
	};

	
	const miss = () => {
		clearInterval(intervalRef);
		const newHp = hp - 1;
		if(newHp >= 0) glitch.startGlitch();
		if (newHp === 0) {
			gameOver();
			return;
		}
		setHP(newHp);
		newRound();
	};
  
	useEffect(() => {
		const handleSpaceKeyDown = (e) => {
			if (e.key === " " && !gameRunning) {
				setLeaderboardVisible(false);
				document.getElementById("playerInput").focus();
				setColor(randomColor());
				setText(randomColor());
				setGameRunning(true);
				setStartTime(Date.now());
			}
		};

		const handleEnterKeyDown = (e) => {
			if (e.key === "Enter" && gameRunning) {
				if (playerGuess === "") return;
				if (playerGuess === color.name.toUpperCase()) {
					const newScore = score + 1;
					setScore(newScore);
					setColor(randomColor());
					setText(randomColor());
					setPlayerGuess("");
					const newDuration = duration - 100;
					setDuration(newDuration);
					setStartTime(Date.now());
					setPercentage(100);
				} else {
					miss();
				}
			}
		};

		window.addEventListener("keydown", handleSpaceKeyDown);
		document
			.getElementById("playerInput")
			.addEventListener("keydown", handleEnterKeyDown);

		return () => {
			window.removeEventListener("keydown", handleSpaceKeyDown);
			document
				.getElementById("playerInput")
				.removeEventListener("keydown", handleEnterKeyDown);
		};
	}, [gameRunning, playerGuess, text]);

	useEffect(() => {
		if (gameRunning) {
			const interval = setInterval(() => {
				const elapsedTime = Date.now() - startTime;
				if (elapsedTime >= duration) {
					miss();
					return;
				}
				const progress = (duration - elapsedTime) / duration;
				const progressWidth = progress * 100;
				setPercentage(progressWidth);
			}, 50);
			setIntervalRef(interval);

			return () => clearInterval(interval);
		}
		return () => {};
	}, [gameRunning, startTime, duration]);

	return (
		<div className="is-centered page">
			{!gameRunning && !nameInputVisible && <Start />}
			 {!gameRunning && nameInputVisible && (
				<Fade>
					<NamePrompt visible={nameInputVisible} setVisible={setNameInputVisible}/>
				</Fade>
			 )}
			{!leaderboardVisible && (
				<div className="flex top-right top-button" style={{gap: "3px"}}>
					{!gameRunning && (
						<button type="button" onClick={handleNameInput}>
							<EditBox height="45px" color="#fff" />
						</button>)}
					<button type="button" onClick={handleLeaderboard}>
						<Trophy height="45px" color="#fff" />
					</button>
				</div>
			)}
			<div className="top-right">
				<Leaderboard
					visible={leaderboardVisible}
					setVisible={setLeaderboardVisible}
				/>
			</div>
			<div className="is-dark title-container">
				<p className="nes-text title">
					<span className="colorize">Tint</span>Twist
				</p>
			</div>
			<div ref={glitch.ref} className="nes-container is-dark is-rounded is-centered main">
				<Color color={color} text={text} />
				<input
					ref={glitch.ref}
					id="playerInput"
					autoComplete="off"
					type="text"
					value={playerGuess}
					onChange={(e) => setPlayerGuess(e.target.value.toUpperCase().trim())}
					className="nes-input is-dark input-style"
				/>
				<ProgressBar percentage={percentage} />
				<div
					className="flex w-full"
					style={{
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: "1.5rem",
						height: "4rem",
					}}
				>
					<Score score={score} />
					<HP currentHp={hp} />
				</div>
			</div>
		</div>
	);
}

export default Handler;
