import React, { useEffect, useState } from "react";
import colors from "../service/ColorBank.js";
import Color from "../components/Color";
import "../App.css";
import HP from "../components/HP.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

function Handler() {
  const [color, setColor] = useState("#fff");
  const [text, setText] = useState("???");
  const [hp, setHP] = useState(3);
  const [playerGuess, setPlayerGuess] = useState("");
  const [percentage, setPercentage] = useState(1);
  const [duration, setDuration] = useState(8000);
  const [intervalRef, setIntervalRef] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [gameRunning, setGameRunning] = useState(false);

  window.addEventListener("keyup", function (e) {
    if (e.key === " ") {
      document.getElementById("playerInput").focus();
      setColor(randomColor().hex);
      setText(randomColor().name);
      setGameRunning(true);
      setStartTime(Date.now());
    }
  });

  document.getElementById("playerInput")?.addEventListener("keyup", function (e) {
    if (e.key === "Enter" && gameRunning) {
      if (playerGuess === "") return;
      if (playerGuess === text) {
        setColor(randomColor());
        setText(randomColor().name);
      } else {
        setHP(hp - 1);
        hpCheck();
        newRound();
      }
    }
  });

  const newRound = () => {
    setStartTime(Date.now());
    setPercentage(1);
    setPlayerGuess("");
    setColor(randomColor().hex);
    setText(randomColor().name);
  };

  const miss = () => {
    clearInterval(intervalRef); 
    const newHp = hp - 1;
    setHP(newHp);
    hpCheck();
    newRound();
  };

  const hpCheck = () => {
    if (hp <= 0) {
      setGameRunning(false);
      setText("GAME OVER");
      setPlayerGuess("");
      setPercentage(1);
      setText("???");
      setHP(3);
    }
  };

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    if (gameRunning) {
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration) {
          miss();
          return;
        }
        const progress = (duration - elapsedTime) / duration;
        const progressWidth = progress * 100 + "%";
        setPercentage(progressWidth);
      }, 50);
      setIntervalRef(interval);
  
      return () => clearInterval(interval);
    }
  }, [gameRunning, startTime, duration]);

  return (
    <div className="is-centered page">
      {gameRunning ? null : (
        <div className="start" id="start">
          <p className="start-text">PRESS [SPACE] TO START</p>
        </div>
      )}
      <div className="nes-container is-dark is-rounded is-centered main">
        <Color color={color} text={text} />
        <input
          id="playerInput"
          type="text"
          value={playerGuess}
          onChange={(e) => setPlayerGuess(e.target.value.toUpperCase())}
          className="nes-input is-dark input-style"
        />
        <ProgressBar percentage={percentage} />
        <div
          className="flex w-full"
          style={{
            justifyContent: "end",
            marginTop: "1.5rem",
          }}
        >
          <HP currentHp={hp} />
        </div>
      </div>
    </div>
  );
}

export default Handler;
