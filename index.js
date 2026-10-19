let exp = "";

function evaluate() {
    x = eval(exp);
    document.getElementById("output").innerHTML = x;
    document.getElementById("input").innerHTML = "";
}
function appendChar(x) {
    exp += x;
    document.getElementById("input").innerHTML = exp;
}