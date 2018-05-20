function load_settings() {
    return {
        "localstorage": true,
    }
}

function initialize() {
    var settings = load_settings();
    var gameWasLoadedFromLocalStorage = false;

    if (settings.localstorage) {
        gameWasLoadedFromLocalStorage = load_game();
    }

    if (!gameWasLoadedFromLocalStorage) {
        console.log('We failed at loading from Localstorage');
        load_fallback_json();
    }

    init_game();
}



function load_fallback_json() {
    var request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('get', '/js/templates/example_level.json', false)
    request.send();

    if (request.readyState === 4 && request.status == "200") {
        var level = JSON.parse(request.responseText);
        Level = level;
        Player = defaultNewplayer();
        render_level(level)
    }
}

// function load_fallback_json_async() {
//     var request = new XMLHttpRequest();
//     request.overrideMimeType('application/json');
//     request.open('get', '/js/templates/example_level.json', true)
//     request.onreadystatechange = function () {
//         if (request.readyState === 4 && request.status == "200") {
//             var level = JSON.parse(request.responseText);
//             Level = level;
//             render_level(level)
//             // init_game()
//         }
//     }
//     request.send();
// }