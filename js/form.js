// buscando elemento botão, colocando na variavel botaoAdicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// funcionalidade de ouvir eventos foi adicionada ao elemento botaoAdicionar
botaoAdicionar.addEventListener("click", function (event) {
    // pausar o comportamento padrao dos elementos do html
    event.preventDefault();

    // buscando elementos do form e adicionando a variaveis do JS
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemInformacoesDoForm(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    // inserindo elemento tr como filho da tabela
    tabela.appendChild(pacienteTr);

    // limpar os campos do form
    form.reset();
});

function obtemInformacoesDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTr(paciente) {

    // criando elemento tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // inserindo elementos td, como filhos dos elementos tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}