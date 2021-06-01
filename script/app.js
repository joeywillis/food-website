const breakfast = document.querySelector('.breakfast-icon')
const breakfastIcon = document.querySelector('.breakfast-icon p')
const breakfastMenu = document.querySelector('.menu-grid')
const lunch = document.querySelector('.lunch-icon')
const lunchIcon = document.querySelector('.lunch-icon p')
const lunchMenu = document.querySelector('.menu-grid')
const dinner = document.querySelector('.dinner-icon')
const dinnerIcon = document.querySelector('.dinner-icon p')
const dinnerMenu = document.querySelector('.menu-grid')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')


openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active');
    closeMenu.classList.toggle('active');
    document.querySelector('#wrapper').classList.toggle('active');
    document.querySelector('.main-nav').classList.toggle('active');

});

closeMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active');
    closeMenu.classList.toggle('active');
    document.querySelector('#wrapper').classList.toggle('active');
    document.querySelector('.main-nav').classList.toggle('active');

});



breakfast.addEventListener('click', () => {
    breakfastMenu.classList.add('breakfast');
    breakfastIcon.classList.add('breakfast');
    lunchMenu.classList.remove('lunch');
    lunchIcon.classList.remove('lunch');
    dinnerMenu.classList.remove('dinner');
    dinnerIcon.classList.remove('dinner');
} );

lunch.addEventListener('click', () => {
    lunchMenu.classList.add('lunch');
    lunchIcon.classList.add('lunch');
    breakfastMenu.classList.remove('breakfast');
    breakfastIcon.classList.remove('breakfast');
    dinnerMenu.classList.remove('dinner');
    dinnerIcon.classList.remove('dinner');
});

dinner.addEventListener('click', () => {
    dinnerMenu.classList.add('dinner');
    dinnerIcon.classList.add('dinner');
    breakfastMenu.classList.remove('breakfast');
    breakfastIcon.classList.remove('breakfast');
    lunchMenu.classList.remove('lunch');
    lunchIcon.classList.remove('lunch');
});