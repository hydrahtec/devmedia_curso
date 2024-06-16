// Select elements
const todoForm = document.querySelector("#todo-form"); //ok
const todoInput = document.querySelector("#todo-input"); //ok

const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const eraseBtn = document.querySelector("#erase-button");
const searchInput = document.querySelector("#search-input");

const typeFilter = document.querySelector("#filter-select");

const todoList = document.querySelector("#todo-list"); //ok

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

const toggleForms = () => {
    todoForm.classList.toggle('hide');
    editForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
};

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        const titleTodo = todo.querySelector('h3');

        if (titleTodo.textContent == oldInputValue) {
            titleTodo.textContent = text;
        };

        //atualizando dados da localStorage

        updateTodoLocalStorage(oldInputValue, text);
    });

    editInput.value = "";

    toggleForms();
};

const searchTodo = (search) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        const titleTodo = todo.querySelector('h3').textContent.toLowerCase();

        todo.style.display = 'flex'

        if (!titleTodo.includes(search)) {
            todo.style.display = 'none';
        };
    });
};

const filterTodo = (filterValue) => {
    const todos = document.querySelectorAll('.todo');

    switch (filterValue) {
        
        case 'all':
            todos.forEach((todo) => {
                todo.style.display = 'flex';
            })
            break;
        
        case 'done':
            todos.forEach((todo) => {
                if (todo.classList.contains('done')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            });
            break;
        
        case 'todo':
            todos.forEach((todo) => {
                if (!todo.classList.contains('done')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
            });
            break;
        
        default:
            break;
    };
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

document.addEventListener('click', (event) => {
    const targetEl = event.target;
    const parentEl = targetEl.closest();
    let titleTodo;

    if (parentEl && parentEl.querySelector('h3')) {
        titleTodo = parentEl.querySelector('h3').textContent || "";
    };

    if (targetEl.classList.contains('finish-todo')) {
        parentEl.classlist.toggle('done');

        updateTodoStatusLocalStorage(titleTodo);
    };

    if (targetEl.classList.contains('edit-todo')) {
        toggleForms();

        editInput.value = titleTodo;
        oldInputValue = titleTodo;
    };

    if (targetEl.classList.contains('remove-todo')) {
        parentEl.remove();

        removeTodoLocalStorage(titleTodo);
    };
});

// localStorage
const getTodoLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    return todos;
};

const loadTodo = () => {
    const todos = getTodoLocalStorage();

    todos.forEach((todo) => {
        saveTodo(todo.text, todo.done, 0);
    });
}

const saveTodolocalStorage = (data) => {
    let todos = getTodoLocalStorage();

    todos.push(data);

    localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodoLocalStorage = () => {};

const updateTodoStatusLocalStorage = () => {};

const removeTodoLocalStorage = () => {};

loadTodo();