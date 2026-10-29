let exp = "";
let history = new Array(100);
let curr = 0;

function meow() {
    const stored = sessionStorage.getItem("history");
    if (stored) {
        history = JSON.parse(stored);
    }
    else {
        history = [];
        sessionStorage.setItem("history", JSON.stringify(history));
    }
}

function seekNext() {
    if (curr === 0) {
        document.getElementById("input").value = history[history.length-1];
        return 1;
    }
    document.getElementById("input").value = history[curr];
    return 0;
}
function seekPrev() {
    if (curr === history.length - 1) {
        document.getElementById("input").value = history[0];
        return 1;
    }
    document.getElementById("input").value = history[curr++];
    return 0;
}

function evaluateStuff() {
    document.getElementById("output").innerHTML = JSON.stringify(eval(exp));
    history.push(exp)
    sessionStorage.setItem("history", JSON.stringify(history));
}
function appendChar(x) {
    document.getElementById("input").value = exp+=x;
    document.getElementById("input").onchange = () => {exp += document.getElementById("input").value;};
}