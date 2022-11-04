let color = ""
const container = document.querySelector(".container");
const btns = document.querySelectorAll("button");
 btns.forEach(btn => btn.addEventListener("click", function(){
    color = btn.getAttribute("background-color");
   /* let classy = this.className;
    let getClassy = document.getElementsByClassName(classy);
    color = getClassy.getAttribute("background-color"); */
    console.log(color);
 }));


/*btns.forEach(button => button.addEventListener("click", e => setColor(e.target.class), false));
*/

const makePixel = function() {
    const div = document.createElement('div')
    div.classList.add("pixel");
    container.appendChild(div);
    const pixels = document.querySelector(".pixel");
    pixels.addEventListener("mousedown", function(){
        pixels.setAttribute("background-color", color);
    });
}

function makePixelGrid(num){
    for(let i=0; i<(num*num); i++){
        makePixel();
    }
}

makePixelGrid(16);

const gridPicker = document.querySelector('.scale');
gridPicker.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
    let num = gridPicker.value;
    console.log(num);
    container.replaceChildren();
    //container.removeAttribute("grid-template-columns");
    container.setAttribute("grid-template-columns", "1fr;");
    container.setAttribute("grid-template-columns"," repeat(" + num + ", 1fr);");
    console.log(container.getAttribute("grid-template-columns"));
    makePixelGrid(num);
    }
} );