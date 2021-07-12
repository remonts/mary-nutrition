//Alterar título do site
var titulo = document.querySelector(".title");
titulo.textContent = "Maria Nutrição";

//Buscando pacientes
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 500) {
        pesoValido = false;
        tdIMC.textContent = "Peso inválido.";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura > 3.00) {
        alturaValida = false;
        tdIMC.textContent = "Altura inválida.";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = (peso / (altura * altura));
        tdIMC.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("cliquei no botão.");
})