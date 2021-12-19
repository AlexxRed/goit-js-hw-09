// ================== take refs  ==================

const refs = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
    bodyStyle: document.querySelector('body')
};

// ================== get color  ==================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// ================== add listeners  ==================
refs.startButton.addEventListener('click', onStartButton);
refs.stopButton.addEventListener('click', onStopButton);

// ================= start change color  =================

function onStartButton() {
    timerId = setInterval(() => {
        if (timerId) {
            refs.startButton.removeEventListener('click', onStartButton);
        refs.bodyStyle.style.backgroundColor = getRandomHexColor();
        console.log(timerId);
        }; 
    }, 1000);
};

// ================== stop change color   ==================

function onStopButton() {
    clearInterval(timerId);
    refs.startButton.addEventListener('click', onStartButton);
};