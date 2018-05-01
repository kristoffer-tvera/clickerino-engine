// JavaScript source code

function save_player() {
    var player_saved = { score:Player.score, spc:Player.score.per.second};

    localStorage.setItem("object", JSON.stringify(player_saved));
}