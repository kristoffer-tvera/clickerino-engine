// JavaScript source code


// Function to check an entire level - This is the main function called for level checking.


function check_level(level) {
    if (!level) {
        console.log("empty level found!")
        return false;
    }

    if (!level.hasOwnProperty("name")) {
        console.log("I have no name!")
        return false;
    }

    if (!check_name(level.name)) {
        console.log("Something wrong in the namecheck!");
        return false;
    }
    if (!level.hasOwnProperty("background_color")) {
        console.log("Missing background color for the level");
        return false;
    }

    if (!check_color(level.background_color)){
        console.log("Missing a hex color value");
        return false;
    }

    if (!level.hasOwnProperty("buttons")) {
        console.log("has no buttons");
        return false;
    }

    if (!Array.isArray(level.buttons)) {
        console.log("Buttons are not in an array");
        return false;
    }

    for (var index = 0; index < level.buttons.length; index++) {
        if (!check_buttons(level.buttons[index])) {
            console.log("Not an actual button");
            return false;
        }
    }

    if (!level.hasOwnProperty("achievements")) {
        console.log("has no achievements");
        return false;
    }

    if (!Array.isArray(level.achievements)) {
        console.log("achievements is not a array");
        return false;
    }

    for (var index = 0; index < level.achievements.length; index++) {
        if (!check_achievements(level.achievements[index])) {
            console.log("Not an actual achievement");
            return false;
        }
    }

    return true;

    // Alternative to for loop
    //level.achievements.forEach(element => {
    //    if (!check_achievement(element)) {
    //        console.log("Not an actual achievement");
    //        return false;
    //    }
    //});
}


// Name checking function, name cannot be left empty, cannot be empty string or lenght more than 50 chars.


function check_name(name) {
    // Hvis den IKKE har gyldig navn
    if (!name) {
        console.log("no name!");
        return false;
    }

    if (name == "") {
        console.log("name was empty string");
        return false;
    }

    if (name.length > 50) {
        console.log("name was more than 50 str length");
        return false;
    }

    return true;
}

// Regex check for number

function check_number(number) {
    // Regex checks if number is not empty string. Number can only contain int or string numbers.
    var rexEgNum = /^-?\d+\.?\d*$/i.test(number);
    if (!rexEgNum) {
        console.log("missing number");
        return false;
    }
    return true;
}


// Checks if number is greater than zero


function check_gt_zero(number) {
    if (!number > 0) {
        console.log("greater than zero");
        return false;
    }
    return true;
}


// Checks for valid hex color values of 6 digits


function check_color(color) {
    var regExTestColor = /^#[0-9A-F]{6}$/i.test(color)
    if (!regExTestColor) {
        console.log("Not a valid hex color");
        return false;
    }
    return true;
}


// Checks for correct css code for buttons e.g


function check_color_css(color) {
    if (css_colors.indexOf(color) < 0) {
        console.log("This css color is not allowed");
        return false;
    } 
    return true;
}

// Percentage checker, needs testing
function check_percentage(number) {
    var regExTest = /^\d[\d]*%$/i.test(number);
    if (!regExTest) {
        console.log("Fix input");
        return false;
    }

    if (number.length > 6) {
        console.log("Too high");
        return false;
    }

    return true;
}
function check_icons(icon) {
    var rexExTest = /^e[0-9][0-9a-f]{2}$/i.test(icon);
    if (!rexExTest) {
        console.log("not a valid icon");
        return false;
    }
    return true;
}


// Checking achievements for correct information


function check_achievements(achievements) {
    if (!check_name(achievements.name)) {
        console.log("No name found");
        return false;
    } 

    if (!achievements.hasOwnProperty("icon")) {
        console.log("No Icon");
    }
    if (!achievements.hasOwnProperty("score")) {
        console.log("insert score");
        return false; 
    }
    if (!check_number(achievements.score)) {
        console.log("No socre");
        return false;
    }
    if (!check_gt_zero(achievements.score)) {
        console.log("Score is not greater than zero");
        return false;
    }

    if (!check_number(achievements.unlocked_on)) {
        console.log("No unlock criteria");
        return false;
    }

    if (!check_gt_zero(achievements.unlocked_on)) {
        console.log("Number cannot be 0");
        return false;
    }

    if (!achievements.hasOwnProperty("flavour_text")) {
        console.log("No flavour-text");
        return false;
    }
    if (achievements.flavour_text.length > 200) {
        console.log("Too long, not more than 200 chars");
        return false;
    }
    
    return true;
}


//Checking buttons for correct information


function check_buttons(buttons) {

    if (!buttons.hasOwnProperty("name")) {
        console.log("Needs a name");
        return false;
    }

    if (!check_name(buttons.name)) {
        console.log("No name found");
        return false;
    }

    if (!buttons.hasOwnProperty("color")) {
        console.log("Missing a color");
        return false;
    }

    if (!check_color(buttons.color)) {
        console.log("Missing valid hex color value");
        return false;
    }

    if (!buttons.hasOwnProperty("icon")) {
        console.log("No Icon");
        return false;
    }

    if (!buttons.hasOwnProperty("cost")) {
        console.log("insert Cost");
        return false;
    }

    if (!check_number(buttons.cost)) {
        console.log("No cost");
        return false;
    }

    if (!check_gt_zero(buttons.cost)) {
        console.log("Score is not greater than zero");
        return false;
    }

    if (!buttons.hasOwnProperty("cost_increase")) {
        console.log("Cost increase missing")
        return false;
    }

    if (!check_percentage(buttons.cost_increase)) {
        console.log("Increment the value in %, e.g 50%");
        return false;
    }

    if (!buttons.hasOwnProperty("gain")) {
        console.log("Gain missing");
        return false;
    }
    if (!check_number(buttons.gain)) {
        console.log("Not a valid gain number, input number");
        return false;
    }

    // Unlocked by is the last option inside buttons

    if (!buttons.hasOwnProperty("unlocked_on")) {
        console.log("Define when this button is unlocked");
        return false;
    }

    if (!check_number(buttons.unlocked_on)) {
        console.log("No unlock criteria");
        return false;
    }

    if (!check_gt_zero(buttons.unlocked_on)) {
        console.log("Number cannot be 0");
        return false;
    }
    return true;

}

