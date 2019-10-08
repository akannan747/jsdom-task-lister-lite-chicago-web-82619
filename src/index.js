document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let form = document.querySelector('form');
let taskInput = form.children[1], priorityColor = form.children[2], submitButton = form.children[3];
let tasks = document.querySelector('#tasks');

const deleteListener = (e) => {
    e.preventDefault();
    e.path[2].removeChild(e.path[1]);
}

const createDeleteButton = () => {
    let button = document.createElement('button', );
    button.setAttribute('data-description', '');
    button.innerHTML = 'X';
    button.addEventListener("click", deleteListener);
    return button;
}

const createNewTask = () => {
    let li = document.createElement('li');
    li.innerHTML = taskInput.value;
    li.style.color = priorityColor.value;
    return li;
}

const getColorValue = (task) => {
    if (task.style.color === 'red') {
        return 1;
    } else if (task.style.color === 'yellow') {
        return 2;

    } else {
        return 3;
    }
}

const compareTaskPriority = (task1, task2) => {
    return getColorValue(task1) - getColorValue(task2);
}

const sortTasks = () => {
    listElems = [...tasks.children];
    listElems.sort(compareTaskPriority);
    for(let i = 0; i < listElems.length; i++) {
        tasks.appendChild(tasks.removeChild(listElems[i]));
    }
}

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    li = createNewTask();

    button = createDeleteButton();
    li.appendChild(button);

    tasks.appendChild(li);
    sortTasks();
});

