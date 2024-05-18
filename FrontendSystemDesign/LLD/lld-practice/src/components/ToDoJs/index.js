const inputEl = document.getElementById('input-todo');
const btnEl = document.getElementById('btn-todo');
const displayEl = document.getElementById('display-todo');

const remTodo = (e) => {
    e.target.parentNode.remove();
}

const editTodo = (e) => {
    const currTodo = e.target.parentNode;
    const updatedTodo = currTodo.querySelector('.todo-text');
    const editTxt = prompt('Edit todo: ', updatedTodo.innerText);
    if (editTxt !== null) {
        updatedTodo.innerText = editTxt;
    }
}

const attachRemBtnTodo = (todo) => {
    const remBtnEl = document.createElement('button');
    remBtnEl.innerHTML = 'X';
    remBtnEl.addEventListener('click', remTodo);
    todo.appendChild(remBtnEl);
}

const attachEditBtnTodo = (todo) => {
    const editBtnEl = document.createElement('button');
    editBtnEl.innerHTML = 'EDIT';
    editBtnEl.addEventListener('click', editTodo);
    todo.appendChild(editBtnEl);
}

const addTodo = () => {
    const newTodoVal = inputEl.value;

    if (newTodoVal.trim() === '') {
        alert('Please enter a todo!');
        return;
    }

    const newTodoEl = document.createElement('div');

    const todoText = document.createElement('span');
    todoText.classList.add('todo-text');
    todoText.innerHTML = newTodoVal;
    newTodoEl.appendChild(todoText);

    attachRemBtnTodo(newTodoEl);
    attachEditBtnTodo(newTodoEl);
    displayEl.appendChild(newTodoEl);

    inputEl.value = '';
}


btnEl.addEventListener('click', addTodo);