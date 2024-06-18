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
const toggleForms = () => {
    todoForm.classList.toggle('hide');
    editForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
};
const updateTodo = (newInputValue) => {
    const todos = document.querySelectorAll('.todo');
    
    todos.forEach((todo) => {
        let titleTodo = todo.querySelector('h3');
        
        if (titleTodo.textContent == oldInputValue) {
            titleTodo.textContent = newInputValue;

            updateTodoLocalStorage(oldInputValue, newInputValue);
        }
    });

    toggleForms();

    todoInput.focus();
};
const eraseEditInput = () => {
    searchInput.value = "";

    searchInput.dispatchEvent(new Event('keyup'));

    searchInput.focus();
};
const searchTodo = (searchValue) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        const titleTodo = todo.querySelector('h3').textContent.toLowerCase();
        console.log(titleTodo);
        
        todo.style.display = 'flex';

        if (!titleTodo.includes(searchValue)) {
            todo.style.display = 'none';
        }
    });
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

        oldInputValue = titleTodo;
        editInput.value = titleTodo;
        editInput.focus();

    }
    
});
editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const editValue = editInput.value;

    if (editValue) {
        updateTodo(editValue);
    } else {
        window.alert('Não é possivel criar tarefas sem titulo, verifique e tente novamente!!');
    }
});
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    toggleForms();

    editInput.value = "";

    todoInput.focus();
});
searchInput.addEventListener('keyup', (e) => {
    //e.preventDefault();

    const searchValue = searchInput.value;

    searchTodo(searchValue);
});
eraseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    eraseEditInput();
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
    const todos = getTodoLocalStorage();

    todos.forEach((todo) => {
        todo.text == titleTodo ? (todo.done = !todo.done) : null;
    });

    localStorage.setItem('todos', JSON.stringify(todos));
};
const updateTodoLocalStorage = (oldtitleTodo, newTitleTodo) => {
    const todos = getTodoLocalStorage();

    todos.forEach((todo) => {
        todo.text == oldtitleTodo ? (todo.text = newTitleTodo) : null;
    });

    localStorage.setItem('todos', JSON.stringify(todos));
};
const removeTodoLocalStorage = (titleTodo) => {
    const todos = getTodoLocalStorage();

    const newTodos = todos.filter((todo) => todo.text != titleTodo );

    localStorage.setItem('todos', JSON.stringify(newTodos));
};

loadTodo();