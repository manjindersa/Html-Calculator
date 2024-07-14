let txtDisplay = document.getElementById('txtDisplay');
let lt_dr = document.getElementById('lt_dr');
var v1;
var v2;
var opt;

function btn_pressed(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/') {
        v1 = txtDisplay.value;
        txtDisplay.value = "";
        opt = value;
        txtDisplay.focus();
    }
    else if (value == '=') {
        v2 = txtDisplay.value;

        if (opt == "+") {
            txtDisplay.value = parseFloat(v1) + parseFloat(v2);
        }
        else if (opt == "-") {
            txtDisplay.value = parseFloat(v1) - parseFloat(v2);
        }
        else if (opt == "*") {
            txtDisplay.value = parseFloat(v1) * parseFloat(v2);
        }
        else if (opt == "/") {
            txtDisplay.value = parseFloat(v1) / parseFloat(v2);
        }
    }
    else {
        txtDisplay.value += value;
    }
}

function clr() {
    txtDisplay.value = "";
    v1 = "";
    v2 = "";
}


let container = document.getElementById('container');
let body = document.getElementById('body');
const buttons = document.querySelectorAll('button');
function chng() {
    if (lt_dr.innerHTML == "Dark") {
        lt_dr.innerHTML = "Light";

        body.style.backgroundColor = "#222222";
        container.style.boxShadow = "2px 2px 10px white";
        txtDisplay.style.boxShadow = "1px 1px 5px white";


        buttons.forEach(button => {
            button.style.boxShadow = "1px 1px 5px white";
            button.style.color = "white";
        });
        
    } else {
        lt_dr.innerHTML = "Dark";
        body.style.backgroundColor = "#ffffff";
        container.style.boxShadow = "2px 2px 10px grey";
        txtDisplay.style.boxShadow = "1px 1px 5px grey";
        
        buttons.forEach(button => {
            button.style.boxShadow = "1px 1px 5px grey";
            button.style.color = "black";
        });
    }
}