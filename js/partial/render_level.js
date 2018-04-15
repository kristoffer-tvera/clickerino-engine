console.log('im alive');

function render_level(level) {
    set_background_color(level.background_color);
    set_title_bar(level.name);

    var container = document.getElementById('level-container');

    for (var i = 0; i < level.buttons.length; i++) {
        var element = level.buttons[i];
        var button = create_button(element);
        container.appendChild(button);
    }
}

function set_background_color(color) {
    document.body.style.backgroundColor = color;
}

function set_title_bar(title) {
    document.getElementById('title-bar').innerText = title;
}

function create_button(button) {
    var element = document.createElement('a');

    var icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.classList.add('left');
    icon.innerText = button.icon;
    element.appendChild(icon);

    var text = document.createElement('p');
    text.innerText = button.name;
    element.appendChild(text);

    // element.style.backgroundColor = button.color;
    element.classList.add('waves-effect');
    element.classList.add('waves-light');
    element.classList.add('btn');


    return element;
}