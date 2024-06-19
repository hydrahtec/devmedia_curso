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
const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const titletodo = document.createElement('h3');
    titletodo.textContent = text;
    todo.appendChild(titletodo);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen">';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark">';
    todo.appendChild(deleteBtn);

    if (done) {
        todo.classList.add('done')
    }
    if (save) {
        saveTodoLocalStorage({text, done: 0});
    }

    todoList.appendChild(todo);

    todoInput.value = "";

    todoInput.focus();
};
const toggleForms = () => {
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
    editForm.classList.toggle('hide');
};
const updateTodo = (oldInputValue, newInputValue) => {
    const todos = document.querySelectorAll('.todos');

    todos.forEach((todo) => {
        const titleTodo = todo.querySelector('h3');

        if (titleTodo.textContent == oldInputValue) {
            titleTodo.textContent = newInputValue;

            updateTodoLocalStorage(oldInputValue, newInputValue);
        };

    });

    toggleForms();

    todoInput.value = "";

    todoInput.focus;
};
const filterTodo = (filterValue) => {
    const todos = document.querySelectorAll('.todos');

    switch (filterValue) {
        case 'all':
            todos.forEach((todo) => {
                todo.style.display = 'flex';
            });
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
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            });
        break;
        default:
            break;
    };
};
const searchTodo = (searchValue) => {
    const todos = document.querySelectorAll('.todos');
    let titleTodo;

    todos.forEach((todo) => {
        titleTodo = todo.querySelector('h3').textContent.toLowerCase();

        if(!titleTodo.includes(searchValue)) {
            todo.style.display = 'none';
        }
    });

};
const eraseSearchInput = () => {
    searchInput.value = "";

    searchInput.dispatchEvent(new Event('keyup'));

    searchInput.focus();
};

// eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
    } else {
        window.alert('Não é possivel criar uma tarefa sem titulo, por favor verifique e tente novamente');
    }
});
document.addEventListener('click', () => {

});
editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newinputValue = editInput.value;

    if(newinputValue) {
        updateTodo(oldInputValue, newinputValue);
    } else {
        window.alert('Não é possivel criar uma tarefa sem titulo, por favor verifique e tente novamente');
    }
});
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    editInput.value = "";

    toggleForms();

    todoInput.value = "";

    todoInput.focus();

});
filterSelect.addEventListener('change', (e) => {
    e.preventDefault();

    const filterValue = filterSelect.value;

    filterTodo(filterValue);
});
searchInput.addEventListener('keyup', (e) => {
    e.preventDefault();

    const searchValue = searchInput.value;

    searchTodo(searchValue);
});
eraseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    eraseSearchInput();
});

loadTodo();