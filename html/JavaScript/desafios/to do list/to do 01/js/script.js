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

let oldInputValue;

// functions
const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const titleTodo = document.createElement('h3');
    titleTodo.textContent = text;
    todo.appendChild(titleTodo);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    if (done) {
        todo.classList.add('done');
    }

    if (save) {
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
    };
});
document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
    let titleTodo;

    if (parentEl && parentEl.querySelector('h3')) {
        titleTodo = parentEl.querySelector('h3').textContent;
    }
    if (targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('done');

        updateTodoStatusLocalStorage(titleTodo);
    }
    if (targetEl.classList.contains('remove-todo')) {
        parentEl.remove();

        removeTodoLocalStorage(titleTodo);
    }
    if (targetEl.classList.contains('edit-todo')) {
        toggleForms();

        editInput.value = titleTodo;

        oldInputValue = titleTodo;
    }
    
});
const toggleForms = () => {
    todoForm.classList.toggle('hide');
    editForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
};
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

    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0);
    });
};
const saveTodolocalStorage = (todo) => {
    const todos = getTodoLocalStorage();

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
};
const updateTodoStatusLocalStorage = (titleTodo) => {
    
};
const removeTodoLocalStorage = (titleTodo) => {

};

loadTodo();