
function render_level(level) {
    set_background_color(level.background_color);
    set_title_bar(level.name);

    var container = document.getElementById('level-container');

    var button_list = container.querySelector('div.button-list__container');

    for (var i = 0; i < level.buttons.length; i++) {
        var button = create_button(level.buttons[i]);
        button_list.appendChild(button);
    }
}

function wipe_level() {
    set_background_color('#fff');
    set_title_bar('Clickerino');
    document.querySelector('div.button-list__container').innerHTML = '';
}

function set_background_color(color) {
    document.body.style.backgroundColor = color;
}

function set_title_bar(title) {
    document.getElementById('title-bar').innerText = title;
}

function create_button(button) {
    var container = document.createElement('a');

    var icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.classList.add('left');
    // icon.innerText = '&#x' + button.icon + ';';
    icon.innerHTML = '&#x' + button.icon + ';';
    container.appendChild(icon);

    var text = document.createElement('span');
    text.innerText = button.name;
    container.appendChild(text);

    container.classList.add('button__container');
    container.classList.add(button.color)

    container.setAttribute('data-id', button.id);
    container.setAttribute('href', '#!');
    // container.setAttribute('onclick', "console.log('hei')");
    container.id = button.id;

    container.addEventListener("click", button_click, false);

    return container;
}