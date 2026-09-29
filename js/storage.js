export function salvarCadastro(dados) {
    localStorage.setItem(
        "cadastroSementesPaz",
        JSON.stringify(dados)
    );
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroSementesPaz");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}