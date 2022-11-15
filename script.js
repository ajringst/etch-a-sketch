let color = "#FF6D00";
const container = document.querySelector(".container");

const btns = document.querySelectorAll("button");
 btns.forEach(btn => btn.addEventListener("click", function(){
    color = window.getComputedStyle(btn).backgroundColor;
    console.log(color);
 }));


function makePixelContainer() {
    let div = document.createElement("div");
    div.classList.add("pixelContainer");
    container.appendChild(div);
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("pixel");
    div.appendChild(innerDiv);
}

function makePixelGrid(num){
    makePixelContainer();
    let pixelContainer = document.querySelector(".pixelContainer");
    let pix = document.querySelector(".pixel");
    for(let i = 0; i < (num - 1); i++){
        let pixClone = pix.cloneNode(true);
        pixelContainer.appendChild(pixClone);
    }
    for(let i = 0; i < (num - 1); i++){
        let pixContClone = pixelContainer.cloneNode(true);
        container.appendChild(pixContClone);
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mousedown", function onMouseDown(event){
        //change "mousedown" to "mouseover" if mouse drag to change color is desired instead of click
        event.target.style.backgroundColor = color;
    }));
    }
}

makePixelGrid(16);

const gridPicker = document.querySelector('.scale');
gridPicker.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
    let num = gridPicker.value;
    console.log(num);
    container.replaceChildren();
    makePixelGrid(num); }
});
