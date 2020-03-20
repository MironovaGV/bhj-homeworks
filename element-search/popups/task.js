let modalClose = document.getElementsByClassName('modal__close');
let button = document.getElementsByClassName('btn_success');
let modal = document.getElementById('modal_success');
let modals = document.getElementsByClassName('modal');
let modalSuccess = document.getElementById('modal_success');

for (let i = 0; i < modalClose.length; i++) {
    console.log(modalClose[i]);
    modalClose[i].onclick = function () {
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].classList.contains('modal_active')) {
                modals[i].classList.remove('modal_active');
            }
        }
        if (modalClose[i].classList.contains('show-success')) {
            modalSuccess.classList.add('modal_active');
        }
    }
}

button[0].onclick = function () {
    modal.classList.remove("modal_active");
}