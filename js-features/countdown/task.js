let addTimer = function () {
    let secondsTimer = document.getElementById('timer');

    if (secondsTimer.textContent === '0') {
        clearInterval(intervalId);
        return alert('Вы победили в конкурсе!');
    }

    secondsTimer.textContent--;
};
let intervalId = setInterval(addTimer, 1000);