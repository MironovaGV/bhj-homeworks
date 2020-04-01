let chatWidget = document.getElementsByClassName('chat-widget')[0];
let myEvent = new Event('messageSend');

chatWidget.addEventListener('click', function () {
    chatWidget.classList.add('chat-widget_active');
})

let messages = document.getElementById('chat-widget__messages');
let input = document.getElementById('chat-widget__input');
let textMessages = document.getElementsByClassName('message__text');

input.addEventListener('keydown', function (event) {
    if (event.keyCode == 13 && Array.from(input.value).length > 0) {
        let date = new Date();
        messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>
`;
        input.value = "";
        input.dispatchEvent(myEvent);
    }
})

input.addEventListener('messageSend', function () {
    let arrayMessages = ['Добрый день!', 'Напишите нам позже', 'Все операторы заняты', 'До свидания!', 'Мы ничего не будем Вам продавать!'];
    shuffle(arrayMessages);
    let date = new Date();
    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text">
      ${arrayMessages.shift()}
    </div>
  </div>
`;
});

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}