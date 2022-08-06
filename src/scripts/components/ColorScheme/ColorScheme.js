let btn = document.querySelector('.header__nav-moon'),
    root = document.documentElement;
let logo = document.querySelector('.logo'),
    burger = document.querySelector('.header__nav-burger'),
    body = document.querySelector('.body'),
    modalBg = document.querySelectorAll('.modal__content-bg'),
    spots = document.querySelectorAll('.spots');

    btn.addEventListener('click', () => {
        let scheme = '',
            src = '';
        if(body.classList.contains('light')){
            body.classList.add('dark');
            body.classList.remove('light');
            logo.src = 'images/Logobg.svg';
            burger.src = "images/burgerbg.svg";
            spots.forEach(el => el.src = `images/bg1.png`)
            modalBg.forEach(el => el.src = `images/bg1.png`)
            
            src = 'bg';
            scheme = 'dark';
            btn.classList.add('moon-bg');
            btn.classList.remove('moon-lg');
            
        }else if(body.classList.contains('dark')){
            body.classList.remove('dark');
            body.classList.add('light');
            logo.src = 'images/Logolg.svg';
            burger.src = "images/burgerlg.svg";
            spots.forEach(el => el.src = `images/lg1.png`)
            modalBg.forEach(el => el.src = `images/lg1.png`)
            
            src = 'lg';
            scheme = 'light';
            btn.classList.add('moon-lg');
            btn.classList.remove('moon-bg');
        }
        localStorage.setItem('--scheme',scheme);
        localStorage.setItem('source',src);
    })
    document.addEventListener('DOMContentLoaded', () => {
        let value = localStorage.getItem('--scheme');
        let srcVal = localStorage.getItem('source');
        if(value){
            body.classList.add(value);
            spots.forEach(el => {
                el.src = `images/${srcVal}1.png`
                src = el.src;
            })
            modalBg.forEach(el => el.src = `images/${srcVal}1.png`)

            btn.classList.add(`moon-${srcVal}`);
            logo.src = `images/Logo${srcVal}.svg`;
            burger.src = `images/burger${srcVal}.svg`;
        }else{
            body.classList.add('light');
            spots.forEach(el => {
                el.src = `images/lg1.png`
                src = el.src;
            })
            modalBg.forEach(el => el.src = `images/lg1.png`)

            btn.classList.add('moon-lg');
            logo.src = `images/Logolg.svg`;
            burger.src = `images/burgerlg.svg`;
        }
    })