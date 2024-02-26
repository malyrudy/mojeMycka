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