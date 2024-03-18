var buttons = document.querySelectorAll("button");
var display = document.getElementById("display");

console.log(display);

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", buttonclicked);
}

function buttonclicked(){
    var classname = this.className;
    if (this.innerHTML == "AC") {
        display.innerHTML = "";
        return;
    }
    if (this.innerHTML == "Del") {
        display.innerHTML = display.innerHTML.slice(0, -1);
        return;
    }
    if (classname == "equal"){
        display.innerHTML = eval(display.innerHTML);
        return;
    }
    display.innerHTML += this.innerHTML;
}