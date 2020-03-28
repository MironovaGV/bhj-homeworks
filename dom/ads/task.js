let rotators = document.getElementsByClassName('rotator');
let allRotatorCases = document.getElementsByClassName('rotator__case');

for (let i = 0; i < allRotatorCases.length; i++) {
    allRotatorCases[i].dataset.color;  
    allRotatorCases[i].style.color = allRotatorCases[i].dataset.color;
}

let myEvent = new Event('switch');

for (let i = 0; i < rotators.length; i++) {
    let currentRotatorCases = rotators[i].getElementsByClassName('rotator__case');
    let caseIndex = Array.from(currentRotatorCases).indexOf(Array.from(rotators[i].getElementsByClassName('rotator__case_active')).pop());
    let time = currentRotatorCases[caseIndex].dataset.speed;

    for (let r = 0; r < currentRotatorCases.length; r++) {
        currentRotatorCases[r].addEventListener('switch', function () {
            caseIndex = Array.from(currentRotatorCases).indexOf(Array.from(rotators[i].getElementsByClassName('rotator__case_active')).pop());
            time = currentRotatorCases[caseIndex].dataset.speed;
            tick(currentRotatorCases, caseIndex, time);
        });
    }

    tick(currentRotatorCases, caseIndex, time);
}

function tick(currentRotatorCases, caseIndex, time) {
    setTimeout(function () {
        currentRotatorCases[caseIndex].classList.toggle('rotator__case_active');
        if (currentRotatorCases.length - 1 === caseIndex) {
            caseIndex = -1;
        }
        currentRotatorCases[caseIndex + 1].classList.toggle('rotator__case_active');

        currentRotatorCases[caseIndex + 1].dispatchEvent(myEvent);
    }, time);
}



