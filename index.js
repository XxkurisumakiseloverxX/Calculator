let history = [];
let curr = 0;

function meow() {
    history = JSON.parse(sessionStorage.getItem("history") || "[]");
    curr = history.length;
}

function saveHistory() {
    sessionStorage.setItem("history", JSON.stringify(history));
}

function loadHistory() {
    history = JSON.parse(sessionStorage.getItem("history") || "[]");
    curr = Math.min(curr, history.length);
}

function seekPrev() {
    loadHistory();
    if (curr > 0) {
        curr -= 1;
        document.getElementById("input").value = history[curr];
    }
}

function seekNext() {
    loadHistory();
    if (curr < history.length - 1) {
        curr += 1;
        document.getElementById("input").value = history[curr];
    }
    else if (curr === history.length - 1) {
        curr = history.length;
        document.getElementById("input").value = "";
    }
}

function evaluateStuff() {
        document.getElementById("output").textContent = JSON.stringify(eval(document.getElementById("input").value.replace("^", "**")));
        history.push(document.getElementById("input").value);
        curr = history.length;
        saveHistory();
}

function appendChar(x) {
    document.getElementById("input").value += x;
    curr = history.length;
}

function handleInputKeydown(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        evaluateStuff();
    }
}
