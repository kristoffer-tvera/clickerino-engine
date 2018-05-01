function display_update_score(score) {
    var formatted = Number.parseFloat(score).toFixed(2);
    document.getElementById('score').innerText = formatted;
}

function display_update_score_per_tick(score) {
    var formatted = Number.parseFloat(score).toFixed(2);
    document.getElementById('score-per-tick').innerText = formatted;
}

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

    container.classList.add('button__container');
    container.classList.add(button.color)

    container.setAttribute('data-cost', button.cost);
    container.setAttribute('data-gain', button.gain);
    container.setAttribute('data-cost-increase', button.cost_increase);
    container.setAttribute('data-unlock-on', button.unlocked_on)

    container.addEventListener("click", button_click);

    var icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.classList.add('left');
    // icon.innerText = '&#x' + button.icon + ';';
    icon.innerHTML = '&#x' + button.icon + ';';
    icon.classList.add('button__icon');
    container.appendChild(icon);

    var text_cost = document.createElement('span');
    text_cost.classList.add('button__text');
    text_cost.classList.add('button__text--cost');
    text_cost.innerText = button.cost;
    container.appendChild(text_cost);

    var text_gain = document.createElement('span');
    text_gain.classList.add('button__text');
    text_gain.innerText = button.gain;
    container.appendChild(text_gain);

    var text_name = document.createElement('span');
    text_name.classList.add('button__text');
    text_name.innerText = button.name;
    container.appendChild(text_name);

    container.classList.add('button__container');
    container.classList.add(button.color)

    container.setAttribute('data-id', button.id);
    container.setAttribute('data-gain', button.gain);
    container.setAttribute('href', '#!');
    // container.setAttribute('onclick', "console.log('hei')");
    container.id = button.id;

    container.addEventListener("click", button_click, false);

    return container;
}