
const socket = new WebSocket('ws://' + location.hostname + ':8002');


const upArrow = document.getElementById('arrow-up');
const leftArrow = document.getElementById('arrow-left');
const downArrow = document.getElementById('arrow-down');
const rightArrow = document.getElementById('arrow-right');

upArrow.addEventListener("click", () => {sendChangeSlide('up')});
leftArrow.addEventListener("click", () => {sendChangeSlide('left')});
downArrow.addEventListener("click", () => {sendChangeSlide('down')});
rightArrow.addEventListener("click", () => {sendChangeSlide('right')});

function sendChangeSlide(direction) {
    if(direction== 'up') {
        socket.send('up');
    } else if(direction== 'left') {
        socket.send('left');
    } else if(direction== 'down') {
        socket.send('down');
    } else if(direction== 'right') {
        socket.send('right');
    }
} 