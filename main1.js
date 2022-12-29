let result;
let num1;
let num2;

function plus() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 + num2;
}
function minus() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 - num2;
}
function umnozhenie() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 * num2;
}
function delenie() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);  
    result = num1 / num2;
}

function results() {
    if (Number.isInteger(num1) == true || Number.isInteger(num2) == true) {
    alert(result)
    }
    else {
        alert("Введите число")
    }
}