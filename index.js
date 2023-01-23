//Project No:1 Stopwatch Program...................................................................................


let mins = 0;
let secs = 0;
let milisec = 0;
let timerID;

const displayTimer = document.getElementById("timeDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);


function reset(){
  clearInterval(timerID);
  mins = 0;
  secs = 0;
  milisec = 0;
  
  displayTimer.innerHTML = "00:00:00";
}



function start(){

  function inter(){

    if(milisec >= 99){
      milisec = 0;
      secs = secs + 1;

    }
    if(secs == 60){
      secs = 0;
      mins = mins + 1;
    }
    milisec = milisec + 1;
   let newSecs = secs < 10 ? "0" + secs : secs;
   let newMins = mins < 10 ? "0" + mins : mins;
   let Newms = milisec < 10 ? "0" +milisec : milisec;
    displayTimer.innerHTML = `${newMins}:${newSecs}:${Newms}`;
  }
 timerID = setInterval(inter, 10);
}

function pause(){
  clearInterval(timerID);
}