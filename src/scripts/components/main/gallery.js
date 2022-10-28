let link = document.querySelectorAll('.main__kitchen-link'),
    close = document.querySelector('.main__gallery-close'),
    header = document.querySelector('.header'),
    fon = document.querySelector('.burger__bg'),
    body = document.querySelector('.body'),
    popup = document.querySelector('.main__gallery-content');

link.forEach(el => {el.addEventListener('click' , () => {
    popup.classList.add('active');
    fon.classList.add('active'); 
    body.style = 'overflow: hidden;'
})});

close.addEventListener('click', () => { 
    popup.classList.remove('active');
    fon.classList.remove('active');
    body.style = `overflow-y: visible;
                    overflow-x: hidden;`;  
});
fon.addEventListener('click', () => { 
    popup.classList.remove('active');
    fon.classList.remove('active');
    body.style = `overflow-y: visible;  
                    overflow-x: hidden;`;  
});
  