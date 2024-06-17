// Selecionando elementtos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const editCancelBtn = document.querySelector('#cancel-edit-btn');

const eraseBtn = document.querySelector('#erase-button');
const searchInput = document.querySelector('#search-input');

const filterValue = document.querySelector('#filter-select');

const todoList = document.querySelector('#todo-list');
// Funções

// Eventos

//Persistindo dados no localStorage
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
const saveTodoLocalStorage = (todo) => {
    const todos = getTodoLocalStorage();

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
};
const removeTodoLocalStorage = (titleTodo) => {
    const todos = getTodoLocalStorage();

    const filterTodos = todos.filter((todo) => todo.text != titleTodo);

    localStorage.setItem('todos', JSON.stringify(filterTodos));
};
const updateTodoStatusLocalStorage = (titleTodo) => {
    const todos = getTodoLocalStorage();

    todos.forEach((todo) => {
        todo.text == titleTodo ? (todo.done = !todo.done) : null;
    });
};
const updateTodoLocalStorage = (titleTodo) => {
    const todos = getTodoLocalStorage();

    todos.forEach((todo) => {
        todo.text == titleTodo ? (todo.text = titleTodo) : null;
    });
};
loadTodo();