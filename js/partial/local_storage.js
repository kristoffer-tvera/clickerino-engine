// JavaScript source code

function save_player() {
   // var player_saved = { score:Player.score, spt:Player.score_per_tick, inventory:Player.inventory};

    localStorage.setItem("object", JSON.stringify(Player));
    return "saved";
}
function save_game(){
    var game_save = {}
}

function load_player(){
    JSON.parse(localStorage.getItem("object",Player));
    return "Game loaded";
}