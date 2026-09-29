import {
    salvarCadastro,
    carregarCadastro
} from "./storage.js";

export function configurarFormulario() {
    const formulario = document.querySelector("form");
    const modal = document.querySelector("#modal-sucesso");
    const botaoFecharModal = document.querySelector("#fechar-modal");

    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    if (!formulario || !modal || !botaoFecharModal) {
        return;
    }

    const dados = carregarCadastro();

    if (dados) {
        document.querySelector("#nome").value = dados.nome || "";
        document.querySelector("#email").value = dados.email || "";
        document.querySelector("#data-nascimento").value = dados.nascimento || "";
        document.querySelector("#cpf").value = dados.cpf || "";
        document.querySelector("#telefone").value = dados.telefone || "";
        document.querySelector("#cep").value = dados.cep || "";
        document.querySelector("#endereco").value = dados.endereco || "";
        document.querySelector("#cidade").value = dados.cidade || "";
        document.querySelector("#estado").value = dados.estado || "";

        const opcaoParticipacao = document.querySelector(
            `input[name="participacao"][value="${dados.participacao}"]`
        );

        if (opcaoParticipacao) {
            opcaoParticipacao.checked = true;
        }
    }

    cpf.addEventListener("input", function () {
        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.slice(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;
    });

    telefone.addEventListener("input", function () {
        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.slice(0, 11);

        valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

        telefone.value = valor;
    });

    cep.addEventListener("input", function () {
        let valor = cep.value.replace(/\D/g, "");

        valor = valor.slice(0, 8);

        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        cep.value = valor;
    });

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const dados = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            nascimento: document.querySelector("#data-nascimento").value,
            cpf: document.querySelector("#cpf").value,
            telefone: document.querySelector("#telefone").value,
            cep: document.querySelector("#cep").value,
            endereco: document.querySelector("#endereco").value,
            cidade: document.querySelector("#cidade").value,
            estado: document.querySelector("#estado").value,
            participacao: document.querySelector(
                'input[name="participacao"]:checked'
            ).value
        };

        salvarCadastro(dados);
        modal.classList.add("ativo");
        modal.setAttribute("aria-hidden", "false");
    });

    botaoFecharModal.addEventListener("click", function () {
        modal.classList.remove("ativo");
        modal.setAttribute("aria-hidden", "true");

        formulario.reset();
    });
}
