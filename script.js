// Scroll Sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = function() {
    sections.forEach(function(sec) {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(function(links) {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        };
    })};

const hamburgerIcon = document.querySelector("#menu-icon");
const navbarMenu = document.querySelector(".navbar-ul");
const navbarMenuItems = document.querySelectorAll(".navbar-ul li");

function activeMenu() {
    navbarMenu.classList.toggle("active");
}

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("bx-x");
    activeMenu();
})

navbarMenuItems.forEach(item => {
    item.addEventListener("click", function(){
        activeMenu();
        hamburgerIcon.classList.toggle("bx-x");
    })
});

// Scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.reviews-list', { origin: "top" });
ScrollReveal().reveal('.about-us-content', { origin: "bottom" });
ScrollReveal().reveal('#home .text-content, .my-contact-info', { origin: "left" });
ScrollReveal().reveal('.image-content, .services-item, form', { origin: "right" });

// Galerie Scroll reveal 
ScrollReveal().reveal('.gallery-description-header', { origin: "top" });
ScrollReveal().reveal('.done-services', { origin: "left" });
ScrollReveal().reveal('.carousel', { origin: "bottom" });

// Stažení dárkového poukazu 
var imagePaths = ['./images/dárkový_poukaz1.jpg', './images/dárkový_poukaz2.jpg', './images/dárkový_poukaz3.jpg', './images/dárkový_poukaz4.jpg'];

function downloadImage(imagePath, downloadFileName) {
    // Vytvoření odkazu na stáhnutí
    var link = document.createElement('a');
    link.href = imagePath;
    link.download = downloadFileName;

    // Přidání odkazu do těla dokumentu
    document.body.appendChild(link);

    // Simulace kliknutí na odkaz
    link.click();

    // Odstranění odkazu z dokumentu
    document.body.removeChild(link);
}
