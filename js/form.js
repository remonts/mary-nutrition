// buscando elemento botão, colocando na variavel botaoAdicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// funcionalidade de ouvir eventos foi adicionada ao elemento botaoAdicionar
botaoAdicionar.addEventListener("click", function (event) {
    // pausar o comportamento padrao dos elementos do html
    event.preventDefault();

    // buscando elementos do form e adicionando a variaveis do JS
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemInformacoesDoForm(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        exibeMensagemsDeErro(erros); 
        form.reset();
        return;
    }

    adicionaPacienteNaTabela(paciente);

    // limpar os campos do form
    var mensagensErro = document.querySelector("#mensagems-erro");
    mensagensErro.innerHTML = "";
    form.reset();
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemsDeErro(erros) {
    var ul = document.querySelector("#mensagems-erro");
    ul.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push("O campo nome deve ser preenchido.")
    if (!validaPeso(paciente.peso)) erros.push("O peso é inválido.")
    if (!validaAltura(paciente.altura)) erros.push("A altura é inválida.")
    if (paciente.gordura.length == 0) erros.push("O campo gordura deve ser preenchido.")
    if (paciente.peso.length == 0) erros.push("O campo peso deve estar preenchido.")
    if (paciente.altura.length == 0) erros.push("O campo altura deve estar preenchido.")

    return erros;
}
