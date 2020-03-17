let cookie = document.getElementById('cookie');
let startTime = new Date();
cookie.onclick = function () {
    let clicker = document.getElementById("clicker__counter");
    clicker.textContent++;
    changeWidthByClick(clicker);
    clickerSpeed(clicker);
};

function changeWidthByClick(clicker) {
    if (clicker.textContent % 2) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }
}

function clickerSpeed(clicker) {
    let speed = document.getElementById("clicker__speed");
    let clickTime = new Date();
    let clickSpeed = clicker.textContent / ((clickTime.getTime() - startTime.getTime()) / 1000);
    speed.textContent = clickSpeed.toFixed(2);
}