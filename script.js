const container = document.querySelector(".container");
const btns = document.querySelectorAll("button")

function applyColor(){
    pixels.classList.add("y1");
}

/*btns.forEach(button => button.addEventListener("click", e => setColor(e.target.class), false));
*/

const makePixel = function() {
    const div = document.createElement('div')
    div.classList.add("pixel");
    container.appendChild(div);
    const pixels = document.querySelector(".pixel");
    pixels.addEventListener("mousedown", applyColor);
}

function makePixelGrid(num){
    for(let i=0; i<(num*num); i++){
        makePixel();
    }
}

makePixelGrid(16);
