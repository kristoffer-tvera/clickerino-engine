function button_click(event) {
    var button = event.target;
    while (button.tagName != 'A') {
        button = button.parentElement;
    }
    button.classList.add('disabled');

    Button_clicked_timeout = setTimeout(function () {
        var cost = button.getAttribute("data-cost");
        var gain = button.getAttribute("data-gain");
        var id = button.getAttribute('data-id');
        var cost_increase = button.getAttribute("data-cost-increase");

        if (!player_modify_score(-cost)) { //False means there was insufficient funds.
            button.classList.remove('disabled');
            return;
        }

        player_modify_score_per_tick(gain);

        var new_cost = cost * ((cost_increase / 100) + 1);
        button.setAttribute('data-cost', new_cost);

        var cost_text = button.querySelector('.button__text--cost');
        if (cost_text) {
            var formatted = Number.parseFloat(new_cost).toFixed(2);
            // var formatted = Number.parseFloat(new_cost).toPrecision(2);

            cost_text.innerText = formatted;
        }

        add_new_inventory(id);

        button.classList.remove('disabled');
    }, 0);

    // if (can_afford(cost)) {
    // }

    // var id = 0;
    // var score_per_second_gain;

    // if (e && e.target.nodeName.toLocaleLowerCase() == 'a') {
    //     id = e.target.getAttribute('data-id');
    //     score_per_second_gain = e.target.getAttribute('data-gain');
    // } else {
    //     id = e.target.parentElement.getAttribute('data-id');
    //     score_per_second_gain = e.target.parentElement.getAttribute('data-gain');
    // }

    // add_new_inventory(id);
    // update_score_per_second(score_per_second_gain);
}


function drag_and_drop_handle(ev) {
    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('... file[' + i + '].name = ' + file.name);
            }
        }
    } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }

    drag_and_drop_clear(ev);
    return false;
}

function drag_and_drop_clear(ev) {
    if (ev.dataTransfer.items) {
        ev.dataTransfer.items.clear();
    } else {
        ev.dataTransfer.clearData();
    }
}

var drag_and_drop = document.querySelector('div.main-stage__drag-and-drop');

drag_and_drop.addEventListener('dragleave', function (e) {
    e.preventDefault();
    drag_and_drop.style.visibility = 'hidden';
});

drag_and_drop.addEventListener('drop', function (e) {
    e.preventDefault();
    drag_and_drop_handle(e);
    drag_and_drop.style.visibility = 'hidden';
});

window.addEventListener("dragover", function (e) {
    e = e || event;
    e.preventDefault();
    drag_and_drop.style.visibility = 'visible';
}, false);

window.addEventListener("drop", function (e) {
    e = e || event;
    e.preventDefault();
}, false);

// Listen for open click
document.getElementById('snackbar').addEventListener('click', openModal);
// Listen for close click
document.getElementsByClassName('modal-closeBtn')[0].addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    document.getElementById('simpleModal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('simpleModal').style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == document.getElementById('simpleModal')) {
        document.getElementById('simpleModal').style.display = 'none';
    }
}