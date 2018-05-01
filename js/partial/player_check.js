

// Function to check the player object - This is the main function called for player object checking.
function player_check(player) {
    // if (!player) {
    //     console.log("No player found!")
    //     return false;
    // }

    // if (!player.hasOwnProperty("name")) {
    //     console.log("You need a playername!")
    //     return false;
    // }

    // if (!check_name(player.name)) {
    //     console.log("Something wrong in the namecheck!");
    //     return false;
    // }

    if (!check_number(player.score)){
        console.log("Not a valid score");
        return false;
    }

    if(!check_gt_zero(player.score)){
        console.log("Score cant be of a  negative values");
        return false;
    }
    
    if (!check_gt_zero(player.score_per_tick)){
        console.log("Score per second cant be of a negative value")
    }

    if (!check_number(player.score_per_tick)){
        console.log("something wrong with SPS");
        return false;
    }
    
    if (!Array.isArray(player.inventory)) {
        console.log("Inventory is not an array");
        return false;
    }

    for (var index = 0; index < player.inventory.length; index++) {
        if (!player_check(player.inventory[index])) {
            console.log("Not an actual inventory item");
            return false;
        }
    }
    return true;
}
player_check(Player);

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
    if (!number >= 0) {
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
    //var regExTest = /^\d[\d]*%$/i.test(number);
    var regExNumber = /\d+/i.test(number);
    if (!regExNumber) {
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

function check_inventory(inventory) {

    if (!inventory.hasOwnProperty("id")) {
        console.log("no ID");
        return false;
    }
    
    if (!check_number(inventory.id)) {
        console.log("No count");
        return false;
    }

    if (!check_gt_zero(inventory.id)) {
        console.log("Score is not greater than zero");
        return false;
    }
  
    if (!inventory.hasOwnProperty("count")) {
        console.log("insert Cost");
        return false;
    }

    if (!check_number(inventory.count)) {
        console.log("No count");
        return false;
    }

    if (!check_gt_zero(inventory.count)) {
        console.log("Score is not greater than zero");
        return false;
    }
    return true;
}
