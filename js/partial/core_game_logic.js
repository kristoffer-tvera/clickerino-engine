function init_game() {
    display_update_score(Player.score);
    display_update_score_per_tick(Player.score_per_tick)
    Cgl_interval = setInterval(iteration, Cgl_interval_time);
    Save_interval = setInterval(save_game, Save_interval_time);
}

function destroy_game() {
    clearInterval(Cgl_interval);
    clearInterval(Save_interval);
    wipe_level();
}

/*
Runs every tick
*/
function iteration() {
    console.log('ping');
    player_modify_score(Player.score_per_tick);

    update_affordable_buttons(Player.score);
    update_displayed_buttons(Player.score_per_tick);
}

function update_affordable_buttons(score) {
    var buttons = document.querySelectorAll('a.button__container');
    if (buttons) {
        for (var j = 0; j < buttons.length; j++) {
            if (buttons[j].hasAttribute('data-cost')) {
                var cost = buttons[j].getAttribute('data-cost');
                cost = parseInt(cost);
                if (cost > score) {
                    buttons[j].classList.add('disabled');
                } else {
                    buttons[j].classList.remove('disabled');
                }
            }
        }
    }
}

function update_displayed_buttons(score_per_tick) {
    var buttons = document.querySelectorAll('a.button__container');
    if (buttons) {
        for (var j = 0; j < buttons.length; j++) {
            if (buttons[j].hasAttribute('data-unlock-on')) {

                var unlock_on = buttons[j].getAttribute('data-unlock-on');
                unlock_on = parseInt(unlock_on);
                if (unlock_on > score_per_tick) {
                    buttons[j].style.display = 'none';
                } else {
                    buttons[j].style.display = 'flex';
                }
            }
        }
    }
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


function player_modify_score(score) {
    score = Number.parseFloat(score);

    if (Player.score + score < 0) {
        return false;
    }

    var sum = Player.score + score;
    var formatted = Number.parseFloat(sum.toFixed(3));

    Player.score = formatted;
    display_update_score(formatted);

    return true;
}

function player_modify_score_per_tick(score) {
    score = Number.parseFloat(score);

    var sum = Player.score_per_tick + score;
    var formatted = Number.parseFloat(sum.toFixed(3));
    Player.score_per_tick = formatted
    display_update_score_per_tick(formatted);
}