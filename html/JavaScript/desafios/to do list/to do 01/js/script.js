// Select elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const eraseBtn = document.querySelector("#erase-button");
const searchInput = document.querySelector("#search-input");

const typeFilter = document.querySelector("#filter-select");

const todoList = document.querySelector("#todo-list");

let oldInputValue;

// create functions
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
    deleteBtn.innerHTML = '<i class="fa-solid fa-x-mark"></i>';
    todo.appendChild(deleteBtn);
    
    //utilizando dados do localStorage
    
    if (done) {
        todo.classList.add('done');
    }

    if (save) {
        saveTodolocalStorage({text, done : 0});
    };

    todoList.appendChild(todo);
    
    todoInput.value = "";

    todoInput.focus();
};

//add events
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    } else {
        window.alert("Não é possivel criar tarefas sem titulo!, tente novamente.");
    }
});

// localStorage
const getTodoLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    return todos;
};

const loadTodo = () => {

}

const saveTodolocalStorage = (data) => {
    let todos = getTodoLocalStorage();

    todos.push(data);

    localStorage.setItem("todos", JSON.stringify(todos));
};