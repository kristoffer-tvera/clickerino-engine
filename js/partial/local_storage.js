// JavaScript source code

function save_player() {
   // var player_saved = { score:Player.score, spt:Player.score_per_tick, inventory:Player.inventory};

    localStorage.setItem("object", JSON.stringify(Player));
}
function save_game(){
    var game_save = {}
}