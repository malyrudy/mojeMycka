const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const navbarMenu = document.querySelector(".navbar-ul");
const navbarMenuItems = document.querySelectorAll(".navbar-ul li");

function activeMenu() {
    navbarMenu.classList.toggle("active");
}

hamburgerIcon.addEventListener("click", () => {
    document.querySelector('.line1').classList.toggle('active');
    document.querySelector('.line2').classList.toggle('active');
    activeMenu();
})

navbarMenuItems.forEach(item => {
    item.addEventListener("click", function(){
        activeMenu();
        document.querySelector('.line1').classList.toggle('active');
        document.querySelector('.line2').classList.toggle('active');
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

// Předpokládáme, že máte cesty k obrázkům ve formě pole nebo můžete je definovat individuálně
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