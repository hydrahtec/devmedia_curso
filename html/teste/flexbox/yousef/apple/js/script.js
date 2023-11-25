$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("hamburguer-active");
        $(".nav_list_mobile").toggleClass("active");
    });
});