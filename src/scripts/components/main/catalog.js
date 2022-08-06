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




// if(el == array[0]){
//             text[0].classList.remove('active')
//             price[0].classList.remove('active')
//             link[0].classList.remove('active')
//         }else if(el == array[1]){
//             text[1].classList.remove('active')
//             price[1].classList.remove('active')
//             link[1].classList.remove('active')
//         }else if(el == array[2]){
//             text[2].classList.remove('active')
//             price[2].classList.remove('active')
//             link[2].classList.remove('active')
//         }
        // if(el == array[0]){
        //     text[0].classList.add('active')
        //     price[0].classList.add('active')
        //     link[0].classList.add('active')
        // }else if(el == array[1]){
        //     text[1].classList.add('active')
        //     price[1].classList.add('active')
        //     link[1].classList.add('active')
        // }else if(el == array[2]){
        //     text[2].classList.add('active')
        //     price[2].classList.add('active')
        //     link[2].classList.add('active')
        // }