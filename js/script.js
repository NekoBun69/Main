const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


const formulario = document.querySelector("form");
const modal = document.querySelector("#modal-sucesso");
const botaoFecharModal = document.querySelector("#fechar-modal");


if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });

}

if (formulario && modal && botaoFecharModal) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        modal.classList.add("ativo");
        modal.setAttribute("aria-hidden", "false");

    });

    botaoFecharModal.addEventListener("click", function () {

        modal.classList.remove("ativo");
        modal.setAttribute("aria-hidden", "true");

        formulario.reset();

    });

}