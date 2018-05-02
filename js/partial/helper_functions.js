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