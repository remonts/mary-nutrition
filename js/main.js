//Alterar título do site
var titulo = document.querySelector(".title");
titulo.textContent = "Renan Monteiro Nutrição";

//Buscando pacientes
var paciente = document.querySelector("#primeiro-paciente");

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
}

if (altura <= 0 || altura > 3.00) {
    alturaValida = false;
    tdIMC.textContent = "Altura inválida.";
}

if (pesoValido && alturaValida) {
    var imc = (peso / (altura * altura));
    tdIMC.textContent = imc;
}