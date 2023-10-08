import React, {useState} from "react";
import colors from '../service/ColorBank.js';
import Color from "../components/Color";
import '../App.css';

function Handler() {
    const [color, setColor] = useState();
    const [text, setText] = useState();
    const input = document.getElementById("input");

    input.addEventListener('keyup', function (e) {
        if (e.key == 'Enter') {
            const answer = input.value;
            input.value = '';
            if (answer == "") return;
        }
    });

    const randomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }



    return (
    <div className="is-centered page">
        <Color color={randomColor().hex} text={randomColor().name} />
        <input type="text" className="nes-input is-dark input-style" id="input"/>
    </div>);
}

export default Handler;
