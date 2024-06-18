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

// functions

// events
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
document.addEventListener('click', (e) => {
    e.preventDefault();
});
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
});
searchInput.addEventListener('keyup', (e) => {
    e.preventDefault();


});
eraseBtn.addEventListener('click', (e) => {
    e.preventDefault();
});
filterSlt.addEventListener('change', (e) => {
    e.preventDefault();
});
// LocalStorage