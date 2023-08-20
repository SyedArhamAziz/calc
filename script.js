const ops = "+−×÷"
let elems = document.getElementsByClassName("calc-item");
let screen = document.getElementById("screen");
let data = ["", "", ""];
for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", onClick);
}

function onClick() {
    if (this.className.includes("num")) {
        if (data[1] == "") {
            data[0] = data[0] + this.innerHTML;
        }
        else {
            data[2] = data[2] + this.innerHTML;
        }
    }
    else if (this.className.includes("op") && ops.includes(this.innerHTML)) {
        if (data[1] == "") {
            data[1] = this.innerHTML;
        }
        else {
            data[0] = calculate(data);
            data[1] = this.innerHTML;
            data[2] = "";
        }
    }
    else if (this.innerHTML == "C") {
        resetArr(data);
    }
    else if (this.innerHTML == "=") {
        data[0] = calculate(data);
        data[1] = "";
        data[2] = "";
    }
    updateDisplay(screen, data);
    console.log(data);
}

function calculate(arr) {
    switch (arr[1]) {
        case "+":
            return String(Number(arr[0]) + Number(arr[2]));
        case "−":
            return String(Number(arr[0]) - Number(arr[2]));
        case "×":
            return String(Number(arr[0]) * Number(arr[2]));
        case "÷":
            return String(Number(arr[0]) / Number(arr[2]));
    }
}
function updateDisplay(display, arr) {
    if (arr[2] != "") {
        display.innerHTML = arr[2];
    }
    else {
        display.innerHTML = arr[0];
    }
}
function resetArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "";
    }
}