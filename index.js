let current = 'red';
let prev = 'white';
let points = 0;
let hp = 3;
let progressBar = document.getElementById('progress-bar');
let progressInterval;
let countdown;
let stopProgressBar = false;
const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'gray'
];

const score = document.getElementById("score");
const input = document.getElementById("answer");

const randomColor = () => {
    const i = Math.floor(Math.random() * 6);
    console.log("Random index and color:", i, colors[i]);
    if (colors[i] != current)
        return colors[i];
    else
        return randomColor();
}
const assignClass = (color) => {
    const element = document.getElementById("block");
    element.classList.remove(prev);
    element.classList.add(color);
    current = color;
}

input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        const answer = input.value;
        input.value = '';
        if (answer == "") return;
        if (answer == "grey") answer = gray;
        handler(answer);
    }
});

const startProgressBar = (seconds) => {
    duration = seconds * 1000; // Convert duration to milliseconds
    startTime = Date.now();
    progressInterval = setInterval(updateProgressBar, 50); // Update every 50 milliseconds
};

const updateProgressBar = () => {
    const elapsedTime = Date.now() - startTime;

    if (elapsedTime >= duration || stopProgressBar) {
        clearInterval(progressInterval);
        resetProgressBar();
        return;
    }

    const progress = elapsedTime / duration;
    const progressWidth = progress * 100; // Calculate the width based on the progress
    progressBar.style.width = `${progressWidth}%`;
};

const resetProgressBar = () => {
    clearInterval(progressInterval);
    progressBar.style.width = '100%';
    stopProgressBar = false;
};

const stopProgress = () => {
    stopProgressBar = true;
};


const handler = (answer = null) => {

    console.log(answer, current, points);
    if (hp <= 0) return;
    if (answer != null) {

        stopProgress();
        resetProgressBar();

        if ((answer.toUpperCase()) == (current.toUpperCase())) {
            points++;
            score.innerHTML = points;
        }
        else {
            const box = document.getElementById("input");
            document.getElementById("hp" + hp).classList.add("is-transparent");
            box.classList.add("shake");
            box.addEventListener('animationend', () => {
                box.classList.remove("shake");
            });

            hp--;
        }
    }

    const time = 10 - (points * 0.25);

    const p = randomColor();
    console.log(p);
    document.getElementById("word").innerHTML = p.toUpperCase();
    assignClass(randomColor());
    prev = current;
    startProgressBar(time);
}

const trigger = document.getElementById("trigger");

trigger.addEventListener('keyup', function (e) {
    if (e.key == " ") {
        document.getElementById("start").classList.add("hide");
        input.focus();
        handler();
    }
});