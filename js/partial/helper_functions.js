//Helper functions 


//Checks if the name property is valid
function check_name(name) {
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

// Checks if number is greater than zero


function check_gt_zero(number) {
    if (number < 0) {
        console.log("greater than zero");
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

//Checks if an icon is valid syntax
function check_icons(icon) {
    var rexExTest = /^e[0-9][0-9a-f]{2}$/i.test(icon);
    if (!rexExTest) {
        console.log("not a valid icon");
        return false;
    }
    return true;
}