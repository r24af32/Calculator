function display(val) {
    document.getElementById("display").value = document.getElementById("display").value + val
}

function clearall() {
    document.getElementById("display").value = ""
}
function calculator() {
    var userInput = document.getElementById("display").value;
    const operatorCount = (userInput.match(/[+\-*/]/g) || []).length;
    // Check if there is more than one operator
    if (operatorCount > 1) {
        document.getElementById("display").value = console.error("Error");
    }
    else{
        var result = eval(userInput);
        document.getElementById("display").value = result;
    }
}