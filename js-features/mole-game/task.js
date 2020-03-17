let holes = document.getElementsByClassName("hole");

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = function () {
        let deadCounter = document.getElementById("dead");
        let lostCounter = document.getElementById("lost");
        if (holes[i].classList.contains('hole_has-mole')) {
            deadCounter.textContent++;
        } else {
            lostCounter.textContent++;
        }
        if (deadCounter.textContent === '10') {
            alert(`Победа!`);
            deadCounter.textContent = 0;
        }
        if (lostCounter.textContent === '5') {
            alert('Вы проиграли!');
            lostCounter.textContent = 0;
        }
    }
}

