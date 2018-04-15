// JavaScript source code

function check_level(level) {
    if (!level) {
        console.log('empty level found!')
        return false;
    }

    if (!level.hasOwnProperty('name')) {
        console.log('I have no name!')
        return false;
    }

    if (!check_name(level.name)) {
        console.log('Something wrong in the namecheck!');
        return false;
    }

    if (!level.hasOwnProperty('achievements')) {
        console.log('has no achievements');
        return false;
    }

    if (!Array.isArray(level.achievements)) {
        console.log('achievements is not a array');
        return false;
    }

    //level.achievements.forEach(element => {
    //    if (!check_achievement(element)) {
    //        console.log('Not an actual achievement');
    //        return false;
    //    }
    //});

    for (var index = 0; index < level.achievements.length; index++) {
        if (!check_achievement(level.achievements[index])) {
            console.log('Not an actual achievement');
            return false;
        }
    }

    return true;
}


function check_name(name) {
    // Hvis den IKKE har gyldig navn
    if (!name) {
        console.log('no name!');
        return false;
    }

    if (name == '') {
        console.log('name was empty string');
        return false;
    }

    if (name.length > 50) {
        console.log('name was more than 50 str length');
        return false;
    }

    return true;
}

function check_number(number) {
    var isNumOk = /^[0-9]{10}|[.]$/i.test(number);
    if (!isNumOk) {
        console.log("missing number");
        return false;
    }

    return true;
}

function check_color(color) {
    var isOk = /^#[0-9A-F]{6}$/i.test(color)
    if (!isOk) {
        console.log("Not a valid hex color");
        return false;
    }
    return true;
}


function check_achievement(achievement) {
        if (!check_name(achievement.name)) {
            console.log('No name found');
            return false;
        } else {
            //mer sjekking av achievement.name
        }

        if (!achievement.hasOwnProperty('icon')) {
            console.log('No Icon');
        }

        if (!check_number(achievements.score)) {
            console.log('No socre');
            return false;
        }

        if (!achievement.hasOwnProperty('unlocked_on')) {
            console.log('No unlock criteria');
        }

        if (!achievement.hasOwnProperty('flavour_text')) {
            console.log('No flavour-text');
        }
    }
