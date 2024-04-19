const list = document.querySelectorAll('.list');

list.forEach((item) => {
    item.addEventListener('click', () => {
        list.forEach((item) => {
            item.classList.remove('active');
        })
        
        item.classList.add('active');
    });
});