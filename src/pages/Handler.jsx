import React, { useEffect, useState } from "react";
import colors from "../service/ColorBank.js";
import Color from "../components/Color";
import "../App.css";
import HP from "../components/HP.jsx";

function Handler() {
  const [color, setColor] = useState("#fff");
  const [text, setText] = useState("none");
  const [hp, setHP] = useState(3);
  const [playerGuess, setPlayerGuess] = useState("");
  const [timer, setTimer] = useState(180);

  window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      setPlayerGuess("");
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
    setTimer(180);
    startTimer();
    setPlayerGuess("");
    setColor(randomColor().hex);
    setText(randomColor().name);
  };

  const hpCheck = () => {
    if (hp <= 0) {
      alert("You died!");
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
      if (timer <= 0) {
        console.log("runout");
        clearInterval(interval);
        setHP(hp - 1);
        hpCheck();
        newRound();
      }
    }, 100);
    return () => clearInterval(interval);
  };

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const firstRound = () => {
      setColor(randomColor().hex);
      setText(randomColor().name);
      startTimer();
    };

    firstRound();
  }, []);

  return (
    <div className="is-centered page">
      <div className="nes-container is-dark is-rounded is-centered main">
        <Color color={color} text={text} />
        <input
          id="playerInput"
          type="text"
          value={playerGuess}
          onChange={(e) => setPlayerGuess(e.target.value.toUpperCase())}
          className="nes-input is-dark input-style"
        />
        <progress
          className="nes-progress is-primary is-dark"
          value={timer}
          max="180"
        />
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
