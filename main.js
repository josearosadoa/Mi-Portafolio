const menu = document.querySelector("ul.nav--menu");
const despliegue = document.getElementById("menu-imagen")

despliegue.addEventListener("click", toggleMenu)

function toggleMenu(){
    menu.classList.toggle("visible")
}