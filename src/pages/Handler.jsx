import React, {useState} from "react";
import colors from '../service/ColorBank.js';
import Color from "../components/Color";
import '../App.css';
import HP from "../components/HP.jsx";

function Handler() {
    const [color, setColor] = useState();
    const [text, setText] = useState();
    const [hp, setHP] = useState(3);
    const input = document.getElementById("input");

    input.addEventListener('keyup', function (e) {
        if (e.key == 'Enter') {
            const answer = input.value;
            input.value = '';
            if (answer == "") return;
            if (answer == text) {
                setColor(randomColor());
                setText(randomColor().name);
            } else {
                setHP(hp - 1);
                hpCheck();
                swap();
            }
        }
    });

    const hpCheck = () => {
        if (hp <= 0) {
            alert("You died!");
        }
    }

    const swap = () => {
        setColor(randomColor());
        setText(randomColor().name);
    }

    const randomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
    <div className="is-centered page">
        <Color color={color.hex} text={text} />
        <input type="text" className="nes-input is-dark input-style" id="input"/>
        <HP n={hp} />
    </div>);
}

export default Handler;
