const inputTodoEl = document.getElementById('todo-input');
const todoBoardEl = document.getElementById('todo-board');
const btnEl = document.getElementsByTagName('button');
console.log('inputTodoEl', inputTodoEl)

const deleteTodo = (todoEl) => {
    todoEl.remove();
}

const moveTodo = (todoEl) => {
    const getStyle = window.getComputedStyle(todoEl);

    const onMouseMove = (e) => {
        console.log('Element is being dragged', e);
        const left = parseInt(getStyle.left) || 0;
        const top = parseInt(getStyle.top) || 0;
        todoEl.style.left = `${left + e.movementX}px`;
        todoEl.style.top = `${top + e.movementY}px`;
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

const addNewTodo = (todoText) => {
    console.log('addnewToDo', todoText)
    const newTodoEl = document.createElement('div');
    const btnEl = document.createElement('button');
    const textEl = document.createElement('p');
    btnEl.innerHTML = `delete todo`;
    btnEl.addEventListener('click', () => deleteTodo(newTodoEl));
    textEl.innerHTML = todoText;
    textEl.style.maxHeight = '150px';
    newTodoEl.style.position = 'absolute';
    newTodoEl.appendChild(textEl);
    newTodoEl.appendChild(btnEl);
    newTodoEl.classList.add('new-notes');
    newTodoEl.addEventListener('mousedown', () => moveTodo(newTodoEl)); 
    todoBoardEl.appendChild(newTodoEl);
}

inputTodoEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputTodoEl.value) {
        addNewTodo(inputTodoEl.value);
        inputTodoEl.value = '';
    }
    console.log('todolist:', todoBoardEl)
})

console.log('btnEl', btnEl)