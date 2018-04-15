// JavaScript source code
var miss = "is missing";
var isOK = "is valid entry";
function nameCheck() {
    if (!level.name) {
        console.log("Level Name" + miss);
    } else {
        console(level.name + isOK);
    }
    if (!level.buttons[0].name) {
        console.log("Button name" + miss);
    } else {
        console.log("Name" + isOK);
    }
}
