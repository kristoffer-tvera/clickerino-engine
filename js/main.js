var level;

document.getElementById('levelParseStart').addEventListener('click', function (e) {
    level = JSON.parse(
        document.getElementById('levelDropZone').value
    );
    console.log(level);
})

var request = new XMLHttpRequest();
request.overrideMimeType('application/json');
request.open('get', '/js/templates/example_level.json', true)
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status == "200") {
        level = JSON.parse(request.responseText);
        console.log(level);
    }
}
request.send();