const refs = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]')
};

console.log(refs.startButton);
console.log(refs.stopButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.startButton.addEventListener('click', onStartButton);
refs.stopButton.addEventListener('click', onStopButton);

function onStartButton() {
    timerId = setInterval(() => {
    getRandomHexColor();
    }, 1000);
};

function onStopButton() {
    clearInterval(timerId);
    
}