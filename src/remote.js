
document.addEventListener('keydown', printKeyCode);

function printKeyCode(event) {
    if(event.keyCode == 38) {
        console.log("up");
    } else if(event.keyCode == 37) {
        console.log("left");
    } else if(event.keyCode == 40) {
        console.log("down");
    } else if(event.keyCode == 39) {
        console.log("right");
    }
} 