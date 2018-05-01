// JavaScript source code

function save_player() {
    var player_saved = { score:Player.score, spt:Player.score_per_tick, inventory:player.inventory};

    localStorage.setItem("object", JSON.stringify(player_saved));
}
function save_game(){
    var game_save = {}
}