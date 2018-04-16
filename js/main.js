var level;
document.getElementById('levelParseStart').addEventListener('click', function (e) {
    level = JSON.parse(
        document.getElementById('levelDropZone').value
    );
    console.log(level);
})