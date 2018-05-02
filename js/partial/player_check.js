// Function to check the player object - This is the main function called for player object checking.
function player_check(player) {
    if (!player) {
        console.log("No player found!")
        return false;
    }

    if (!player.hasOwnProperty("score")) {
        console.log("You need some score!")
        return false;
    }

    if (!check_number(player.score)){
        console.log("Not a valid score");
        return false;
    }

    if(!check_gt_zero(player.score)){
        console.log("Score cant be of a  negative values");
        return false;
    }
    
    if (!player.hasOwnProperty(player.score_per_tick)){
        console.log("Assign a score per tick value");
        return false;
    }

    if (!check_gt_zero(player.score_per_tick)){
        console.log("Score per second cant be of a negative value");
        return false;
    }

    if (!check_number(player.score_per_tick)){
        console.log("something wrong with SPS");
        return false;
    }
    if(!player.hasOwnProperty("inventory")){
        console.log("What!? not an inventory dude");
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
