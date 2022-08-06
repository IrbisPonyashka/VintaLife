let images = document.querySelectorAll('.main__order-img');
let sourc = ['']

images.forEach(el =>{
    el.addEventListener('mouseover', () => {
        for(let i =0; i<=images.length;i++){
            el == images[i] ? el.src =`images/l${i+1}.png` : el;
        }
    })
    el.addEventListener('mouseout', () => {
        for(let i =0; i<=images.length;i++){
            el == images[i] ? el.src =`images/b${i+1}.png` : el;
        }
    })
    
})

