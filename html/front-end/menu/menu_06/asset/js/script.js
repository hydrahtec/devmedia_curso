const menuItem = document.querySelectorAll('.item_menu');

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
       menuItem.forEach((item) => {
        item.classList.remove('active');
       })
       item.classList.add('active');
    });
});