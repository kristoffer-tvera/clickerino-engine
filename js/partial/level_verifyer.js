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

    if (check_name(level.name)) {
        console.log('Something wrong in the namecheck!');
        return false;
    }

    
    return true;
}


function check_name(name) {
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

}

function is_achievement(achievement) {
    if (!achievement.hasOwnProperty('name')) {
        console.log('No name found');
    } else {
        //mer sjekking av achievement.name
    }

    if (!achievement.hasOwnProperty('icon')) {
        console.log('No Icon');
    }

    if (!achievement.hasOwnProperty('score')) {
        console.log('No socre');
    }

    if (!achievement.hasOwnProperty('unlocked_on')) {
        console.log('No unlock criteria');
    }

    if (!achievement.hasOwnProperty('flavour_text')) {
        console.log('No flavour-text');
    }
}
