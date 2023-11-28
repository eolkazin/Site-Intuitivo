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
document.addEventListener("DOMContentLoaded", function () {
    const headline = "Seu Título";
    const paragraph = "Seu parágrafo.";

    const headlineElement = document.getElementById("headline");
    const paragraphElement = document.getElementById("paragraph");

    typeText(headlineElement, headline, function () {
        typeText(paragraphElement, paragraph);
    });
});

function typeText(element, text, callback) {
    element.textContent = "";
    let index = 0;

    function animate() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            requestAnimationFrame(animate);
        } else {
            if (callback) {
                callback();
            }
        }
    }

    animate();
}





function irinicio(){
    window.location="/page-principal/index.html";
}

function irsbn(){
    window.location="/sbn/sbn.html"
}

function ircontact(){
    window.location="contact.html"
}