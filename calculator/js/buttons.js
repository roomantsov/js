function add(n){
    document.getElementById('poligon').value += n;
}

function clr(){
    document.getElementById('poligon').value = "";
    document.getElementById('res').value = "";
}

function plus(){
    s = document.getElementById('poligon').value;
    if (!isChar(s[s.length-1]))
        document.getElementById('poligon').value += "+";
}

function minus(){
    s = document.getElementById('poligon').value;
    if (!isChar(s[s.length-1]))
        document.getElementById('poligon').value += "-";
}

/*function dot(){
    if (!isChar(s[s.length-1]))
        document.getElementById('poligon').value += ".";
}*/

function divide(){
    s = document.getElementById('poligon').value;
    if (!isChar(s[s.length-1]))
        document.getElementById('poligon').value += "/";
}

function multiplication(){
    s = document.getElementById('poligon').value;
    if (!isChar(s[s.length-1]))
        document.getElementById('poligon').value += "*";
}

function zero(){
    s = document.getElementById('poligon').value;
        if(s[s.length-1] == "/"){
            alert("Division by zero");
            control();
        } else {
            document.getElementById('poligon').value += "0";
        }
}