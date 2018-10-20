function display_update_score(score) {
    var formatted = Number.parseFloat(score).toFixed(2);
    document.getElementById('score').innerText = formatted;
}

function display_update_score_per_tick(score) {
    var formatted = Number.parseFloat(score).toFixed(2);
    document.getElementById('score-per-tick').innerText = formatted;
}

function render_level(level, player) {
    
    set_background_color(level.background_color);
    set_title_bar(level.name);

    var container = document.getElementById('level-container');

    var button_list = container.querySelector('div.button-list__container');

    for (var i = 0; i < level.buttons.length; i++) {
        var button = create_button(level.buttons[i],player);
        button_list.appendChild(button);
    }
}

//=sum(B1 +((A1 /100)*B1)*C1)
// inv items .id .count
// function update_level(level, player) {
//     console.log('updating level');
//     for (var i = 0; i < player.inventory.length; i++) {
//         var item = player.inventory[i];
//         for (var j = 0; j < level.buttons.length; j++) {
//             if (level.buttons[j].id == item.id) {
//                 //   Match between player inventory and level buttons
//                 var base_cost = level.buttons[j].cost;
//                 base_cost = parseInt(base_cost);
//                 var cost_increase = level.buttons[j].cost_increase / 100;
//                 var current_amount = item.count;
//                 var new_cost = base_cost +((cost_increase * base_cost) * current_amount);
//                 level.buttons[j].cost = new_cost;
//                 console.log(base_cost);
//                 console.log(cost_increase);
//                 console.log(current_amount);
//                 console.log(new_cost);
//             }
//         }
//     }
//     return level;
// }

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

function create_button(button,player) {
    var container = document.createElement('a');
    
    container.classList.add('button__container');
    container.classList.add(button.color)
    
    var cost = button.cost;
    if (player){
    
    
        for (var i = 0; i < player.inventory.length; i++){
            if(button.id == player.inventory[i].id){
                var base_cost = button.cost;
                base_cost = parseInt(base_cost);
                var cost_increase = button.cost_increase / 100;
                console.log(cost_increase);
                
                var current_amount = player.inventory[i].count;
                console.log(current_amount);
                
                var new_cost = base_cost +(cost_increase * base_cost) * current_amount;
                
                console.log(cost);
                cost = new_cost;
                console.log(cost);
                
                
            }
        }
    }



    container.setAttribute('data-cost', cost);
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
    text_cost.innerText = cost;
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