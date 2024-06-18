// selecionando elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

const searchInput = document.querySelector('#search-input');
const eraseBtn = document.querySelector('#erase-button');

const filterSlt = document.querySelector('#filter-select');

const todoList = document.querySelector('#todo-list');

// functions
const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const titleTodo = document.createElement('h2');
    titleTodo.textContent = text;
    todo.appendChild(titleTodo);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(doneBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(doneBtn);

    if (done) {
        todo.classList.add('done');
    }

    if(save) {
        saveTodolocalStorage({text, done: 0});
    }

    todoList.appendChild(todo);

    todoInput.value = "";

    todoInput.focus();
};
// events
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    } else {
        window.alert('Não é possivel criar uma tarefa sem titulo, por favor tente novamente!!');
    }
});
document.addEventListener('click', (e) => {
    e.preventDefault();
});
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
});
searchInput.addEventListener('keyup', (e) => {
    e.preventDefault();


});
eraseBtn.addEventListener('click', (e) => {
    e.preventDefault();
});
filterSlt.addEventListener('change', (e) => {
    e.preventDefault();
});
// LocalStorage
const getTodoLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    return todos;
};
const loadTodo = () => {
    const todos = getTodoLocalStorage();

    saveTodo(todos.text, todos.done, 0);
};

loadTodo();