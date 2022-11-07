let color = "#FF6D00";
const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");
 btns.forEach(btn => btn.addEventListener("click", function(){
    colorClass = btn.getAttribute("background-color");
   /* let classy = this.className;
    let getClassy = document.getElementsByClassName(classy);
    color = getClassy.getAttribute("background-color"); */
    console.log(colorClass);
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
    //pixels.setAttribute("flex-basis","calc( " + basis + "% - 0.5px;");
    for(let i=0; i<(num*num); i++){
        makePixel();
    }
}

makePixelGrid(16);

const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mousedown", function onClick(event){
        event.target.style.backgroundColor = color;
        console.log(event.target.getAttribute("background-color"));
    }));

const gridPicker = document.querySelector('.scale');
gridPicker.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
    let num = gridPicker.value;
    console.log(num);
    container.replaceChildren();
    makePixelGrid(num);
    }
} );