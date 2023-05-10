const container = document.querySelector('.container');
const pixel_button=document.querySelector('.pixel_button');
const reset_button=document.querySelector('.reset_button');
const erase_button=document.querySelector('.erase_button');
pixel_button.addEventListener('click',fun_prompt);
reset_button.addEventListener('click',reset);
erase_button.addEventListener('click',erase);
function fun_prompt(event){
    let number = 0;
    while (true) {
        number = prompt("How many pixels in a row?");
        if(Number.isInteger(Number(number)) && Number(number) >= 1 && Number(number) <= 100){
            break;
        } else {
            alert("Please enter a valid integer between 1 and 100.");
        }
    }
    let total_pixel = number * number;
    let width_height = 64 / number;
    new_sketch(total_pixel, width_height);
}

function reset(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }return;
}
function erase(){
    const pixels=document.querySelectorAll('.pixel');
    pixels.forEach(pixel=>pixel.style.backgroundColor= 'rgb(0,0,0)');
}
function new_sketch(total_pixel,width_height){
    reset();
    for (let i = 0; i < total_pixel; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.setAttribute('style', `width: ${width_height}vh; height: ${width_height}vh`);
    container.appendChild(div);
    div.addEventListener('mouseenter',rgb);
    }
}
function rgb(event){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}