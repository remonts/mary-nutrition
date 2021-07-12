// buscando elemento botão, colocando na variavel botaoAdicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// funcionalidade de ouvir eventos foi adicionada ao elemento botaoAdicionar
botaoAdicionar.addEventListener("click", function(event){
    // pausar o comportamento padrao dos elementos do html
    event.preventDefault();

    // buscando elementos do form e adicionando a variaveis do JS
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando elemento tr
    var pacienteTr = document.createElement("tr");
    
    //criando elementos td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    // associando conteudos das variaveis extraídas do form, aos conteúdos dos elementos td 
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    // inserindo elementos td, como filhos dos elementos tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    
    // inserindo elemento tr como filho da tabela
    tabela.appendChild(pacienteTr);
});