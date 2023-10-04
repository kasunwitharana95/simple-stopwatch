const time = document.querySelector(".time");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");

let hoursNum = 0;
let minutesNum = 0;
let secondsNum = 0;
let interval;

start.addEventListener("click", startWatch);
reset.addEventListener("click", resetwatch);
stop.addEventListener("click", stopwatch);

function startWatch() {
  let startTime = new Date().getTime();
  interval = setInterval(() => {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    displayeTime(elapsedTime);
  }, 1000);
}

function displayeTime(elapsedTime) {
  secondsNum = Math.floor(elapsedTime / 1000) % 60;
  minutesNum = Math.floor(elapsedTime / 1000 / 60) % 60;
  hoursNum = Math.floor(elapsedTime / 1000 / 60 / 60);
  seconds = secondsNum.toString().padStart(2, "0");
  minutes = minutesNum.toString().padStart(2, "0");
  hours = hoursNum.toString().padStart(2, "0");
  time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

function resetwatch() {
  clearInterval(interval);
  time.innerHTML = `00 : 00 : 00`;
}

function stopwatch() {
  clearInterval(interval);
}
