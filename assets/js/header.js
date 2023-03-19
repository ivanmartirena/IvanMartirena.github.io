var iconoMenu = document.getElementById("icono_menu");
var menu = document.getElementById("menu");

iconoMenu.addEventListener("click", mostrar_menu);
function mostrar_menu(){
    menu.classList.toggle("menu_lateral")
}