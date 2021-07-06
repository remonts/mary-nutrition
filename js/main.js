//Alterar título do site
var titulo = document.querySelector(".title");
titulo.textContent = "Renan Monteiro Nutrição";

//Buscando pacientes
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = (peso / (altura * altura));

var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = imc;