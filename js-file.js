function grid(num){
    
}
const container = document.getElementById('container');

for(let i = 0; i <= 16 * 16; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.textContent = '1';
    container.appendChild(box);
}