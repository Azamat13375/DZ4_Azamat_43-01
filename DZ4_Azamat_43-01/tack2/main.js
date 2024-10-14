/// задание №3
var X = document.querySelector('#X')
var Y = document.querySelector('#Y')
var block = document.querySelector('.block')

block.style.width = "500px"
block.style.height = "500px"
block.style.backgroundColor = 'lightblue'

block.addEventListener('mousemove', (e) =>{
    X.innerHTML = e.screenX;
    Y.innerHTML = e.screenY;

})
