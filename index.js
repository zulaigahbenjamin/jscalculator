//block thingie
function display(val) {
    document.getElementById('result').value += val
    return val
}
//clear
function clearTheScreen() {
    document.getElementById('result').value = ""
}
//solving
function solve() {
    let x = document.getElementById('result').value

    let y = eval(x);
    document.getElementById('result').value = y
    return y
}
function deleteValue() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
}
