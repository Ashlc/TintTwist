const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'gray'
];
let current = 'red';
let prev = 'white';
let points = 0;
let hp = 3;
let intervalId;
let isRunning = false;

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
        if (answer == "") 
            return;
         else 
            handler(answer);
        

    }
});

const startProgressBar = (duration) => {
  const progressBar = document.getElementById('progress-bar');
  let progress = 0;
  const increment = 100 / (duration * 1000);
  let intervalId;

  intervalId = setInterval(() => {
      progress += increment;
      progressBar.style.width = progress + '%';

      if (progress >= 100) {
          clearInterval(intervalId);
          // Perform any action after the progress bar reaches 100%
          console.log('Progress complete!');
      }
  }, 10);
  
  isRunning = true;
}

const resetProgressBar = () => {
  clearInterval(intervalId);
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = '0%';
  isRunning = false;
}

const handler = (answer = null) => {

    console.log(answer, current, points);  
    if (hp <= 0) return;
    if (answer != null) {
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

    const time = 5 - (points * 0.1);

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
