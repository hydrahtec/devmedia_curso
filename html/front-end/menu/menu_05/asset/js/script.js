window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0)
});