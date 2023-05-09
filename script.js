const container = document.querySelector('.container');
let number = prompt("how many pixels in a row");
let total_pixel = number * number;
let width_height = 640 / number;
for (let i = 0; i < total_pixel; i++) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  div.setAttribute('style', `width: ${width_height}px; height: ${width_height}px`);
  container.appendChild(div);
}

let pixel=document.querySelectorAll('.pixel')
pixel.forEach(div=>{
    div.addEventListener('mouseenter',rgb);
});
function rgb(event){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}