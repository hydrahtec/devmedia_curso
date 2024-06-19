//selecão de elementos
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
const filterSelect = document.querySelector('#filter-select');
const searchInput = document.querySelector('#search-input');
const eraseBtn = document.querySelector('#erase-button');
const todoInput = document.querySelector('#todo-input');
const editInput = document.querySelector('#edit-input');
const todoForm = document.querySelector('#todo-form');
const editForm = document.querySelector('#edit-form');
const todoList = document.querySelector('#todo-list');
let oldInputValue;

// local Storage
const getTodoLocalStorge = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    return todos;
};
const loadTodo = () => {
    const todos = getTodoLocalStorge();

    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0);
    });
};
const saveTodoLocalStorage = (todo) => {
    const todos = getTodoLocalStorge();

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
};
const removeTodoLocalStorage = (titleTodo) => {
    const todos = getTodoLocalStorge();

    const newTodos = todos.filter((todo) => todo.text != titleTodo);

    localStorage.setItem('todos', JSON.stringify(newTodos));
};
// funções


// eventos