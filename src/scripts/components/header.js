let headerLeft = document.querySelector('.header__left');

const burger = document.querySelector('.header__nav-burger'),
        menu = document.querySelector('.burger__menu'),
        fon = document.querySelector('.burger__bg'),
        body = document.querySelector('.body');
        // body.style = 'overflow-x: hidden;';


burger.addEventListener('click', () => {
    menu.classList.add('active');
    fon.classList.add('active');  
    body.style = 'overflow: hidden;';      
})
fon.addEventListener('click', () => {
    menu.classList.remove('active');
    fon.classList.remove('active');
    body.style = 'overflow-y: visible;';  
    body.style = 'overflow-x: hidden;';  
})

// window.screen.width > 1700 ? headerLeft.style = 'padding:0px' : headerLeft.style = 'padding-right: 30px;' ;

// body.style = 'overflow-x: hidden;';  