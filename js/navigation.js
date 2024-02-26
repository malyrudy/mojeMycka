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