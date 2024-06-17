// Selecionando elementtos

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