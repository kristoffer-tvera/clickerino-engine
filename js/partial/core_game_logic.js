function init_game() {

    Cgl_interval = setInterval(iteration, 1000);
}

function destroy_game() {
    clearInterval(Cgl_interval);
    wipe_level();
}

function iteration() {
    console.log(Player);

    var score_per_tick = Player.score_per_tick;
    var score_before = Player.score;
    var score_after = score_before + score_per_tick;

    Player.score = score_after;
}

function update_score_per_second(score) {
    Player.score_per_tick += parseFloat(score);
}

/* Button ID is passed. If we have a object with same button id, increment. If not, add new with count 1 */
function add_new_inventory(inventory_item) {
    var inventory_item_new = true;

    for (var i = 0; i < Player.inventory.length; i++) {
        if (Player.inventory[i].id == inventory_item) {
            inventory_item_new = false;
            Player.inventory[i].count += 1;
        }
    }
    if (inventory_item_new) {
        Player.inventory.push({ "id": inventory_item, "count": 1 })
    }
}