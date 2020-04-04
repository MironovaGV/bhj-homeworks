let form = document.getElementsByClassName('tasks__control')[0];
let inputText = document.getElementById('task__input');
let buttonTask = document.getElementById('tasks__add');
let taskList = document.getElementById('tasks__list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (event.target[0].value.length > 0) {
        addTask(inputText.value);
    }


    return false;
})

function addTask(input) {
    let task = document.createElement('div');
    task.classList.add('task');
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    task.append(taskTitle);
    let taskLink = document.createElement('a');
    taskLink.innerHTML = '&times;';
    taskLink.classList.add('task__remove');
    taskLink.href = '#';
    taskTitle.append(input);
    task.append(taskLink);
    taskList.append(task);
    taskRemoves(taskLink);
}


function taskRemoves(taskLink) {
    taskLink.onclick = function (event) {
        taskLink.parentNode.remove();

        return false;
    }
}