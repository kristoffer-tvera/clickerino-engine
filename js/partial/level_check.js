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





// Checking achievements for correct information


function check_achievements(achievements) {
    if (!check_name(achievements.name)) {
        console.log("No name found");
        return false;
    } 

    if (!achievements.hasOwnProperty("icon")) {
        console.log("No Icon");
    }

    if (!check_icons(achievements.icon)) {
        console.log("Not a valid icon input");
        return false;
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

    if (!check_color_css(buttons.color)) {
        console.log("Missing valid css color value");
        return false;
    }

    if (!buttons.hasOwnProperty("icon")) {
        console.log("No Icon");
        return false;
    }

    if (!check_icons(buttons.icon)) {
        console.log("input a icon");
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

