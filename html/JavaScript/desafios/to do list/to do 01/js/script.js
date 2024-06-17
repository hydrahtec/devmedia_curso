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


loadTodo();