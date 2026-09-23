const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });

}