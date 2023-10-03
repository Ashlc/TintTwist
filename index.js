let current = 'vermelho';
let prev = 'branco';
let points = 0;
let hp = 3;
let progressBar = document.getElementById('progress-bar');
let progressInterval;
let countdown;
let stopProgressBar = false;
let isGameStarted = false;

const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'gray',
    'purple'
];

const score = document.getElementById("score");
const input = document.getElementById("answer");

const randomColor = () => {
    const i = Math.floor(Math.random() * colors.length);
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
        else handler(answer);
    }
});

const startProgressBar = (seconds) => { //Major W to GPT for helping me with this.
    duration = seconds * 1000;
    startTime = Date.now();
    progressInterval = setInterval(updateProgressBar, 50);
};

const updateProgressBar = () => {
    const elapsedTime = Date.now() - startTime;

    if (elapsedTime >= duration || stopProgressBar) {
        clearInterval(progressInterval);
        miss();
        return;
    }

    const progress = elapsedTime / duration;
    const progressWidth = progress * 100;
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

const miss = () => {
    const box = document.getElementById("input");
    input.value = '';
    input.focus();  
    document.getElementById("hp" + hp).classList.add("is-transparent");
    box.classList.add("shake");
    box.addEventListener('animationend', () => {
        box.classList.remove("shake");
    });

    hp--;
    handler();
}

const handler = (answer = null) => {

    console.log(answer, current, points);

    if (answer != null) {

        resetProgressBar();
        stopProgress();

        if ((answer.toUpperCase()) == (current.toUpperCase())) {
            points++;
            score.innerHTML = points;
        }

        else miss();
    }
    
    if (hp <= 0) {
        document.getElementById("start").classList.remove("hide");
        input.blur();
        isGameStarted = false;
    
        hp = 3;
        document.querySelectorAll(".heart").forEach((heart) => {
            heart.classList.remove('is-transparent');
        })
    
        points = 0;
        score.innerHTML = points;
        clearInterval(progressInterval);
        progressBar.style.width = '100%';
        stopProgressBar = true;
        return;
    }

    else {
        
        let time;
        if(points > 25) {time = 10 - (points * 0.175);}
        else {time = 10 - (points * 0.25);}
        console.log("Time: " + time);
        const p = randomColor();
        console.log(p);
        document.getElementById("word").innerHTML = p.toUpperCase();
        assignClass(randomColor());
        prev = current;
        startProgressBar(time);
    }   
}

const trigger = document.getElementById("trigger");

trigger.addEventListener('keyup', function (e) {
    if (e.key == ' ') {
        if (isGameStarted == false){
            document.getElementById("start").classList.add("hide");
            input.focus();
            isGameStarted = true;
            handler();
        }
    }
});
