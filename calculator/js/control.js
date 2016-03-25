
var chars = ["+","-","/","*","."];
function control(){
        var stack = false;
    var s = document.getElementById('poligon').value;
    for (var i = 0; i < s.length; i++){
        if ( (s[i] >= "0" && s[i] <= "9") || s[i] == "*" || s[i] == "-" || s[i]=="+"
            || s[i] == "/"){
            console.log("All under controll");
        } else {
            s = document.getElementById('poligon').value = s.replace(s[i],'');
            i--;
        }
        // Проверка на двойное введение символов +,-,*,/
        if (isChar(s[i]) && !stack){
            var stack = true;
        } else if(isChar(s[i]) && stack == true){
               s = s.replace(i,'');
               document.getElementById('poligon').value = s;
        } else {
               stack = false;
        }
    }

    for (i = 0; i < s.length; i++){
        if(s[i] == 0 && s[i-1] == "/"){
            document.getElementById('poligon').value = "";
        }
    }

}

function isChar(arg){
    if (arg == "+" || arg == "-" || arg == "*" || arg == "/")
        return true;
    return false;
}

function isZero(arg){
    return arg == "0";
}