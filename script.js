function addtodisply(value){
    document.getElementById('display').value += value;
}
function cleardisply(){
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
}
function removeLastChar() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}