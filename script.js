const container=document.querySelector('.container');
for(let i=0;i<256;i++){
    const div=document.createElement('div');
    div.classList.add('pixel');
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