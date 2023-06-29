const userInput = document.getElementById('numbers');
const container = document.getElementById('container');
const reset = document.getElementById('reset');

userInput.addEventListener('input', function () {
  if(userInput.value < 1) userInput.value = 1;
  if (userInput.value > 100) userInput.value = 100;})

makeSquares = () => {
  for(let i = 0; i <= 256; i++) {
    const box = document.createElement('div') ;
    box.classList.add('box');
    container.appendChild(box);
    
    box.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black';
    })
  } 
}

newSize = () => {
  container.innerHTML = ""
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
    )
    
    container.style.setProperty(
      "grid-template-rows",
      `repeat(${userInput.value}, 2fr)`
      )
      
      for(let i = 0; i <= userInput.value * userInput.value; i++) {
        const box = document.createElement('div') ;
        box.classList.add('box');
        container.appendChild(box);
        
        box.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = 'black';
        })
      }
      
    }
  
userInput.addEventListener('change', newSize)

reset.addEventListener('click', function(){
  let cell = container.children;
    for(let i = 0; i < 5000; i++) {
      cell[i].style.backgroundColor = 'white'
    }
  })

  
makeSquares()
  
  