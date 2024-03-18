var buttons = document.querySelectorAll("button");
var display = document.getElementById("display");

console.log(display);

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", buttonclicked);
}

function buttonclicked(){
    if (display.innerHTML == "Invalid Syntax") display.innerHTML = "";
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
        try {
            display.innerHTML = eval(display.innerHTML);
        } catch(err){
            display.innerHTML = "Invalid Syntax";
        }
        return;
    }
    var lastchar = display.innerHTML.substring(display.innerHTML.length-1, display.innerHTML.length);
    if (lastchar == "." || lastchar == "/" || lastchar == "*" || lastchar == "-" || lastchar == "+"){
        if (this.innerHTML == "." || this.innerHTML == "/" || this.innerHTML == "*" || this.innerHTML == "-" || this.innerHTML == "+"){
            display.innerHTML = display.innerHTML.slice(0, -1);
        }
    }
    display.innerHTML += this.innerHTML;
}