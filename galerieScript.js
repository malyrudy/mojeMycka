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

// Galerie Scroll reveal 
ScrollReveal().reveal('.gallery-description-header', { origin: "top" });
ScrollReveal().reveal('.done-services', { origin: "left" });
ScrollReveal().reveal('.carousel', { origin: "bottom" });

// Dárkový poukaz Scroll reveal 
ScrollReveal().reveal('#darkovy_poukaz .information', { origin: "left" });
ScrollReveal().reveal('.darkovy-poukaz-item h3', { origin: "bottom" });
ScrollReveal().reveal('.darkovy-poukaz-item img', { origin: "right" });