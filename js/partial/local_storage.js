// JavaScript source code

function save_player() {
   // var player_saved = { score:Player.score, spt:Player.score_per_tick, inventory:Player.inventory};

     localStorage.setItem("Player Save", JSON.stringify(Player));
    return "saved";
}
function save_game(){
    var game_save = {}
}

function load_player(){
    var Player = JSON.parse(localStorage.getItem("Player Save"));
    return "Game loaded";
}