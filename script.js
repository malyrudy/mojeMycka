const navButtonOpen = document.querySelector(".hamburger-menu-icon");
const navbarMenu = document.querySelector(".navbar-ul");
const navbarMenuItems = document.querySelectorAll(".navbar-ul li");

function activeMenu() {
    navbarMenu.classList.toggle("active");
}

navButtonOpen.addEventListener("click", () => {
    console.log("Ahoj");
    activeMenu()
})

navbarMenuItems.forEach(item => {
    item.addEventListener("click", activeMenu);
});
