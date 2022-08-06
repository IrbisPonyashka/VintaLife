let links = [
    document.querySelector('.header__nav-link'),
    document.querySelector('.header__box-link'),
    document.querySelector('.main__adress-btn'),
    document.querySelector('.footer__content-btn')
]
let modal = document.querySelector('.modal'),
    result = document.querySelector('.result'),
    close = document.querySelector('.modal__content-close'),
    content = document.querySelector('.modal__content'),
    body = document.querySelector('.body');
let input = document.querySelectorAll('.modal__content-input'),
    btn = document.querySelectorAll('.modal__content-btn');
let icon = document.querySelector('.result__content-check'),
    descr = document.querySelector('.result__content-descr'),
    resultBtn = document.querySelector('.result__content-btn');
const form = document.querySelectorAll('#form,#form2');

    form.forEach(el => {
        el.addEventListener('submit',(event) => {
            event.preventDefault();
        });
    })

links.forEach(link => {
    link.addEventListener('click', () => {
        modal.classList.add('active');
        body.style = 'overflow: hidden;'
        
        btn[0].addEventListener('click', () => {
                result.classList.add('active');
                modal.classList.remove('active');
                if(input[0].value!=='' && remValue(+input[1].value) == true){
                    icon.classList.remove('icon-cross')
                    icon.classList.remove('cross')
                    icon.classList.add('icon-check')
                    icon.classList.add('check')
                    descr.innerHTML = 'Спасибо! Ваша заявка была отправлена и в ближашее время будет обработана'
                }else{
                    icon.classList.remove('icon-check')
                    icon.classList.remove('check')
                    icon.classList.add('icon-cross')
                    icon.classList.add('cross')
                    descr.innerHTML = 'Неправильно введенные данные или пустое поле ввода! В поле для номера нельзя указывать символы кроме чисел!'
                }
                    input[0].value = '';
                    input[1].value = '';

                

                resultBtn.addEventListener('click', () => {
                    result.classList.remove('active');
                    body.style = 'overflow: visible;'
                })
            
        })
    })
})
function remValue(valTwo){return /^[0-9]+$/.test(valTwo)} 


close.addEventListener('click', () => { modal.classList.remove('active'); body.style = 'overflow: visible;'})
content.addEventListener('click', (event) => {  event.stopPropagation()})
modal.addEventListener('click', () => {  modal.classList.remove('active'); body.style = 'overflow: visible;'})





    // const {form} = document.forms;
    // function retrieveFormValue(event){
    //     event.preventDefault()
    //     const {elements} = form;
    //     const values = {};
    //     for(let i = 0; i < elements.length;i++){
    //         const formElement = elements[i];
    //         const {name} = formElement;
    //         if(name){
    //             const {value} = formElement;
    //             values[name] = value;
    //         }
    //     }
    //     console.log(values);
    // }
    // form.addEventListener('submit' , retrieveFormValue);