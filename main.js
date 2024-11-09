var circle = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
const moveBy = 50;
let powerUp = 1000;

     
    
let playerBounds = circle.getBoundingClientRect();
let objectBounds = player2.getBoundingClientRect();
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 100 + 'px';
    circle.style.top = 300 + 'px';
    
});



window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
         
            break;  
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            
            break;   
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
      
            break;  
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            
            break;
        case 'Enter':
             
            circle.style.left = parseInt(circle.style.left) + powerUp + 'px';
            
            break;
        
    }
})















































