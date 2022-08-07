let offset = 0;
const slidersImages = document.querySelector('.main__kitchen-slider');
let slidePrev = document.querySelector('.main__kitchen-left'),
    slideNext = document.querySelector('.main__kitchen-right'),
    item = document.querySelectorAll('.main__kitchen-item'),
    itemOne = document.querySelector('.main__kitchen-item'),
    kitchen = document.querySelector('.main__kitchen');
    let img = [1,2,3,4];
    let widthItem = itemOne.offsetWidth+60;
    const screenWidth = window.screen.width

    
    // let sliderWidth = itemOne.offsetWidth*item.length
    // slidersImages.style = `width:${sliderWidth}px;`

    function getScreenWidth(screenWidth,length){
        if(screenWidth > 992 && screenWidth < 1670){
            return length -2
        }else if(screenWidth < 992){
            return length -1
        }else{
            return length-3
        }
    }

let nextSlide = () => {
    (offset < (getScreenWidth(screenWidth,item.length)) * widthItem) ? offset += widthItem : offset = 0;
    slidersImages.style.left = -offset + 'px';
}
let prevSlide = () => {
    ( offset > 0 ) ? offset -= widthItem : offset = (getScreenWidth(screenWidth,item.length)) * widthItem;
    slidersImages.style.left = -offset + 'px';
}

let interval = setInterval( () => nextSlide(), 5000)
kitchen.addEventListener('mouseover', () => {clearTimeout(interval)})
kitchen.addEventListener('mouseout', () => {interval = setInterval( () => nextSlide(), 5000)})
slidePrev.addEventListener('click', prevSlide)
slideNext.addEventListener('click', nextSlide)