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

let oldInputValue;

// Funções
const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement('div');
    todo.classList.add('todo')

    const titleTodo = document.createElement('h3');
    titleTodo.textContent = text;
    todo.appendChild(titleTodo);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTMl = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-todo');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(removeBtn);
    
    if (done) {
        todo.classList.add('done');
    }
    if (save) {
        saveTodoLocalStorage({text, done});
    }

    todoList.appendChild(todo);

    todoInput.value = "";

    todoInput.focus();
};
//atualiza tarefa

//remover tarefa

// trocar formulario

// filtrar tarefa

// buscar tarefa

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