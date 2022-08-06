let item = document.querySelectorAll('.main__kitchen-item'),
    text = document.querySelectorAll('.main__kitchen-text'),
    price = document.querySelectorAll('.main__kitchen-price'),
    link = document.querySelectorAll('.main__kitchen-link');


let array =[];
item.forEach(el => {
    array.push(el);
    el.addEventListener('mouseover', () => {
        for(let i =0;i<item.length;i++){
            if(el == array[i]){
                text[i].classList.add('active')
                price[i].classList.add('active')
                link[i].classList.add('active')
            }}
    })
    el.addEventListener('mouseout', () => {
        for(let i =0;i<item.length;i++){
            if(el == array[i]){
                text[i].classList.remove('active')
                price[i].classList.remove('active')
                link[i].classList.remove('active')
            }}
    })
})




