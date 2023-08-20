let curr_str = "";

document.getElementById("screen").addEventListener("click", onClick);
function onClick() {
    console.log('happening');
    append_char('n');
}

function append_char(char) {
    curr_str = curr_str + char;
    console.log(curr_str);
}