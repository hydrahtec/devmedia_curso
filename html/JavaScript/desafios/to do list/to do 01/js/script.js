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
const updateTodoStatusLocalStorage = (titleTodo) => {
    const todos = getTodoLocalStorge();

    todos.forEach((todo) => {
        todo.text == titleTodo ? (todo.done = !todo.done) : null;
    });

    localStorage.setItem('todos', JSON.stringify(todos));
};
const updateTodoLocalStorage = (oldInputValue, newInputValue) => {
    const todos = getTodoLocalStorge();

    todos.forEach((todo) => {
        todo.text == oldInputValue ? (todo.text = newInputValue) : null;
    });

    localStorage.setItem('todos', JSON.stringify(todos));
};
// funções
const saveTodo = (text, done = 0, save = 1) => {};
const toggleTodo = () => {};
const updateTodo = (oldInputValue, newInputValue) => {
    const todos = document.querySelectorAll('.todos');
};
const removeTodo = (titleTodo) => {
    const todos = document.querySelectorAll('.todos');

};
const filterTodo = (filterValue) => {
    const todos = document.querySelectorAll('.todos');

};
const searchTodo = (searchValue) => {
    const todos = document.querySelectorAll('.todos');

};
const eraseInput = () => {};

// eventos

loadTodo();