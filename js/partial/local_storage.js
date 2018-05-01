// JavaScript source code
function save_game(){
    save_player();
    save_level();
}

function load_game(){
    load_player();
    load_level();
}

function save_player() {
    save_to_localstorage("player",Player);
}

function load_player(name){
    var fromLocalStorage = load_from_localstorage("player");
    if (fromLocalStorage){
        Player = fromLocalStorage;
    }
}

function save_level(){
    save_to_localstorage("level", Level);
}

function load_level(){
    var fromLocalStorage = load_from_localstorage("level");
    if (fromLocalStorage){
        Level = fromLocalStorage;
    }
}

function load_from_localstorage(keyName){
    return JSON.parse(localStorage.getItem(keyName));
}


function save_to_localstorage(keyName, objectToSave){
    localStorage.setItem(keyName, JSON.stringify(objectToSave));
}