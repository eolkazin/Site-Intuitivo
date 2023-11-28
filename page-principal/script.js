function slider(imageSrc, imageTitle, imageDescription) {
    document.querySelector('.one').src = imageSrc;
    document.querySelector('#image-title').innerText = imageTitle;
    document.querySelector('#image-description').innerText = imageDescription;
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


function irinicio(){
    window.location="index.html";
}

function irsbn(){
    window.location="/sbn/sbn.html"
}

function ircontact(){
    window.location="/contact/contact.html"
}