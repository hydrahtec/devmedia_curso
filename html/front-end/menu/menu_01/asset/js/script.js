function menuShow () {
    let menuMobile = document.querySelector('#mobile_menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    };
};