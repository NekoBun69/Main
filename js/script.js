const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const conteudo = document.querySelector("#conteudo");

const paginas = {
    inicio: `
        <section>
            <h2>Missão</h2>

            <img
                src="img/voluntarios.jpg"
                alt="Voluntários da ONG Sementes de Paz distribuindo alimentos para famílias"
            >

            <p>
                Levar ajuda humanitária básica, saúde e apoio educacional
                para crianças e famílias em áreas de vulnerabilidade na Palestina,
                buscando garantir dignidade no meio do conflito.
            </p>
        </section>

        <section>
            <h2>Junte-se à Sementes de Paz e ajude a transformar realidades!</h2>

            <p>
                Milhares de crianças e famílias precisam de apoio para ter acesso
                a alimentos, água limpa, saúde e educação.
            </p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Como Ajudamos?</h2>

            <p>
            Nós da "Sementes de Paz" arrecadamos doações online
            e fazemos parcerias com escolas e empresas no Brasil.
            Todo o valor arrecadado é usado para comprar suprimentos
            em países vizinhos.
            </p>
        </section>

        <section class="projetos">

            <h2>Projetos Principais</h2>

            <article>
                <img
                    src="img/mochila-cheia.jpg"
                    alt="Materiais escolares representando o Projeto Mochila Cheia"
                >

                <span class="badge">Educação</span>

                <h3>Projeto Mochila Cheia</h3>

                <p>
                    Focado na educação. Consiste em arrecadar fundos
                    para enviar kits escolares e livros para abrigos
                    e escolas improvisadas.
                </p>
            </article>

            <article>
                <img
                    src="img/agua-limpa.jpg"
                    alt="Água e alimentos representando o Projeto Água Limpa e Pão"
                >

                <span class="badge">Sobrevivência</span>

                <h3>Projeto Água Limpa e Pão</h3>

                <p>
                    Trabalha com a distribuição de alimentos e recursos
                    para purificação de água em regiões vulneráveis.
                </p>
            </article>

            <article>
                <img
                    src="img/caixa-cuidado.jpg"
                    alt="Kit de higiene e primeiros socorros representando o Projeto Caixa de Cuidado"
                >

                <span class="badge">Saúde</span>

                <h3>Projeto Caixa de Cuidado</h3>

                <p>
                    Projeto voltado à distribuição de itens de primeiros
                    socorros e produtos de higiene pessoal.
                </p>
            </article>

        </section>

        <section>
         <h2>Como participar</h2>

            <p>
                Você pode contribuir com a Sementes de Paz por meio
                de doações ou participando como voluntário.
            </p>

            <a href="#" data-pagina="cadastro">Quero participar</a>
        </section>
    `,
    cadastro: `
        <section>
            <h2>Cadastro de Colaborador</h2>

            <div class="alerta">
                Preencha todos os campos obrigatórios antes de enviar o cadastro.
            </div>

            <form>
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" name="nome" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="data-nascimento">Data de nascimento:</label>
                    <input type="date" id="data-nascimento" name="data-nascimento" required>

                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        maxlength="14"
                        pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                        required
                    >

                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        maxlength="15"
                        pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        maxlength="9"
                        pattern="\\d{5}-\\d{3}"
                        required
                    >

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required>

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>

                    <label for="estado">Estado:</label>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        maxlength="2"
                        placeholder="SP"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Participação</legend>

                    <p>Como você deseja participar?</p>

                    <input
                        type="radio"
                        id="voluntario"
                        name="participacao"
                        value="voluntario"
                        required
                    >
                    <label for="voluntario">Quero atuar como voluntário</label>

                    <input
                        type="radio"
                        id="doacao"
                        name="participacao"
                        value="doacao"
                        required
                    >
                    <label for="doacao">Quero contribuir com doações</label>

                    <input
                        type="radio"
                        id="informacoes"
                        name="participacao"
                        value="informacoes"
                        required
                    >
                    <label for="informacoes">Quero receber informações sobre os projetos</label>
                </fieldset>

                <button type="submit">Enviar cadastro</button>
            </form>

            <div class="modal" id="modal-sucesso" aria-hidden="true">
                <div class="modal-conteudo">
                    <h2>Cadastro enviado com sucesso!</h2>
                    <p>Obrigado por se cadastrar na Sementes de Paz.</p>

                    <button type="button" id="fechar-modal">
                        Fechar
                    </button>
                </div>
            </div>
        </section>
    `
    
};

conteudo.innerHTML = paginas.inicio;

function configurarFormulario() {
    const formulario = document.querySelector("form");
    const modal = document.querySelector("#modal-sucesso");
    const botaoFecharModal = document.querySelector("#fechar-modal");

    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    if (!formulario || !modal || !botaoFecharModal) {
        return;
    }

    const dadosSalvos = localStorage.getItem("cadastroSementesPaz");

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

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

        localStorage.setItem(
            "cadastroSementesPaz",
            JSON.stringify(dados)
        );


        modal.classList.add("ativo");
        modal.setAttribute("aria-hidden", "false");
    });

    botaoFecharModal.addEventListener("click", function () {
        modal.classList.remove("ativo");
        modal.setAttribute("aria-hidden", "true");

        formulario.reset();
    });
}

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });

}

document.addEventListener("click", function (evento) {
    const link = evento.target.closest("[data-pagina]");

    if (!link) {
        return;
    }

    evento.preventDefault();

    const pagina = link.dataset.pagina;

    if (!paginas[pagina]) {
        return;
    }

    conteudo.innerHTML = paginas[pagina];

    if (pagina === "cadastro") {
        configurarFormulario();
    }
});