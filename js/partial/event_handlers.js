function button_click(button) {
    console.log('botton was clicked');
}


function drag_and_drop_handle(ev) {
    // event.preventDefault();
    // alert('drop!');


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
    // alert('test');
    // return false;
    drag_and_drop_handle(e);
    drag_and_drop.style.visibility = 'hidden';
});

// window.addEventListener('dragenter', function (e) {
//     e.preventDefault();

//     drag_and_drop.style.visibility = 'visible';
// });

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
function openModal(){
  document.getElementById('simpleModal').style.display = 'block';
}

// Function to close modal
function closeModal(){
  document.getElementById('simpleModal').style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == document.getElementById('simpleModal')){
    document.getElementById('simpleModal').style.display = 'none';
  }
}