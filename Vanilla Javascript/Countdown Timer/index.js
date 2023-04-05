const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let countdownTimer = null;

function startTimer(){
    startBtn.style.display = 'none';
    stopBtn.style.display = 'initial';

    countdownTimer = setInterval(()=>{
        timer();
    },1000);
}

function timer(){
    if(second.value > 60){
        minute.value = ++minute.value;
        second.value = parseInt(second.value) - 59;
    } else if (minute.value > 60) {
        hour.value = ++hour.value;
        minute.value = parseInt(minute.value) - 60;
    }
    if(hour.value < 1 && minute.value < 1 && second.value < 1) {
        hour.value = '';
        minute.value = '';
        second.value = '';
        stopTimer();
    } else if(second.value != 0) {
        second.value = `${second.value <= 10 ? '0' : ''}${second.value - 1}`;
    } else if(minute.value != 0 && second.value == 0) {
        second.value = 59;
        minute.value = `${minute.value <= 10 ? '0' : ''}${minute.value - 1}`;
    } else if(hour.value != 0 && minute.value == 0) {
        minute.value = 60;
        hour.value = `${hour.value <= 10 ? '0' : ''}${hour.value - 1}`;
    } 
}

function stopTimer(state) {
    if(state === 'pause'){
        startBtn.innerHTML = 'Continue';
    } else {
        startBtn.innerHTML = 'Start';
    }

    startBtn.style.display = 'initial';
    stopBtn.style.display = 'none';

    clearInterval(countdownTimer);
}


startBtn.addEventListener('click',function(){
    if(hour.value < 1 && minute.value < 1 && second.value < 1) {
        return;
    }

    startTimer();
});

stopBtn.addEventListener('click', function(){
    stopTimer('pause');
});

resetBtn.addEventListener('click', function(){
    hour.value = '';
    minute.value = '';
    second.value = '';
    stopTimer();
})
