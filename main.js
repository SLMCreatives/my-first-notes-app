
let toggleBtn = document.querySelector('.toggle');
let navBar = document.querySelector('.navbar');
let object = document.querySelector('.notes');
let overlay = document.querySelector('.overlay');


function toggleMenu() {
    navBar.classList.toggle('active');
    object.classList.toggle('notes-active');
    overlay.classList.toggle('overlay-active');

    if (toggleBtn.classList.contains('fa-ellipsis-v')) {
    toggleBtn.classList.replace('fa-ellipsis-v','fa-ellipsis-h');
} else if(toggleBtn.classList.contains('fa-ellipsis-h')) {
    toggleBtn.classList.replace('fa-ellipsis-h','fa-ellipsis-v');

}

}

