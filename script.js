const container = document.querySelector('.container');
const button=document.querySelector('button');
button.addEventListener('click',fun_prompt);
function fun_prompt(event){
    let number = prompt("How many pixels in a row?");
    let total_pixel = number * number;
    let width_height = 640 / number;
    new_sketch(total_pixel,width_height);
}
function new_sketch(total_pixel,width_height){
    for (let i = 0; i < total_pixel; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.setAttribute('style', `width: ${width_height}px; height: ${width_height}px`);
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