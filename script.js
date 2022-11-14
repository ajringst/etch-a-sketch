let color = "#FF6D00";
const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");
 btns.forEach(btn => btn.addEventListener("click", function(){
    color = window.getComputedStyle(btn).backgroundColor;
    console.log(color);
 }));


/*btns.forEach(button => button.addEventListener("click", e => setColor(e.target.class), false));
*/

const makePixel = function() {
    const div = document.createElement('div')
    div.classList.add("pixel");
    container.appendChild(div);
}

function makePixelGrid(num){
    let basis = Math.floor(100/num);
    console.log(basis);
    for(let i=0; i<(num*num); i++){
        makePixel();
    }
    //document.getElementsByClassName("pixel").style.setAttribute("flex-basis","calc( " + basis + "%;");
    //console.log (getElementsByClassName("pixel"));
    
}

makePixelGrid(6);

const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mousedown", function onMouseDown(event){
        event.target.style.backgroundColor = color;
    }));

const gridPicker = document.querySelector('.scale');
gridPicker.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
    let num = gridPicker.value;
    console.log(num);
    container.replaceChildren();
    makePixelGrid(num);
    let basis = (100/num);
    $('.pixel').css("flex", "1 0 ${num}");   }
} );