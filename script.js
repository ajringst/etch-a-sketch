let color = "#FF6D00";
const container = document.querySelector(".container");
//const pixelContainer = document.querySelector(".pixelContainer");
const pixelContainer = document.querySelector(".pixelContainer");
//const div = document.createElement('div');
const btns = document.querySelectorAll("button");
 btns.forEach(btn => btn.addEventListener("click", function(){
    color = window.getComputedStyle(btn).backgroundColor;
    console.log(color);
 }));


/*btns.forEach(button => button.addEventListener("click", e => setColor(e.target.class), false));
*/
function makePixelContainer() {
    let div = document.createElement("div");
    div.classList.add("pixelContainer");
    container.appendChild(div);
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("pixel");
    div.appendChild(innerDiv);
}

//function makePixel(){}

/*function makePixelGrid(num){
    for(let i=0; i<num; i++){
        div.classList.add("pixelContainer");
        container.appendChild(div);
        makePixels(num);
        };
    
    }   
*/

function makePixelGrid(num){
    makePixelContainer();
    //makePixel();
    /*let pixelContainerContent = "";
    for(let i=0; i<num; i++){
        pixelContainerContent += "${div.classList.add(".pixel")}"";
        console.log(pixelContainerContent);
    }
    pixelContainers.forEach(element => element.innerHTML(pixelContainerContent) )
    */
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
    makePixelGrid(num); }
} );