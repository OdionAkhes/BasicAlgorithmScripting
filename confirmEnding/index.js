/** @format */

function confirmEnding(str, target) {
let ending = str.slice(str.length - target.length)
    if (ending === target) {
        return true;
    } 
    return false;
}

console.log(confirmEnding("Bastian", "ian"));
