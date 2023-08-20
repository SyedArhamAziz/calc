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
    else if (this.className.includes("op")) {
        if (data[1] == "") {
            data[1] = this.innerHTML;
        }
        else {
            data[0] = calculate(data);
            data[1] = "";
            data[2] = "";
        }
    }
    console.log(data);
}

function calculate(arr) {
    switch (arr[1]) {
        case "+":
            return String(Number(arr[0]) + Number(arr[2]));
    }
}