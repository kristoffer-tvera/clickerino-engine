function init_game() {

    Cgl_interval = setInterval(iteration, 1000);
}

function destroy_game() {
    clearInterval(Cgl_interval);
    wipe_level();
}

function iteration() {
    console.log('hei');

}