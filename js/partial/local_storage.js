// JavaScript source code
function save_game(){
    save_player();
    save_level();
}

function load_game(){
    var player = load_player();
    var level = load_level();
    if (level_check(level) && player){
        render_level(level);
        Player = player;
        return true;
    }
    return false;
}

function save_player() {
    save_to_localstorage("player",Player);
}

function load_player(name){
    var fromLocalStorage = load_from_localstorage("player");
    if (fromLocalStorage){
        return fromLocalStorage;
    }
}

function save_level(){
    save_to_localstorage("level", Level);
}

function load_level(){
    var fromLocalStorage = load_from_localstorage("level");
    if (fromLocalStorage){
        return fromLocalStorage;
    }
}

function load_from_localstorage(keyName){
    return JSON.parse(localStorage.getItem(keyName));
}


function save_to_localstorage(keyName, objectToSave){
    localStorage.setItem(keyName, JSON.stringify(objectToSave));
}