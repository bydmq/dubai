document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('burger');
    let navList = document.getElementById('header__box');

    burger.addEventListener('click', function () {
        burger.classList.toggle('open');
        navList.classList.toggle('open');
    });
});