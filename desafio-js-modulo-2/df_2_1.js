let titulo = document.querySelector("h1");
titulo.innerHTML="Hora do Desafio";

function verificarConsole(){
    console.log("O botão foi clicado");
}

function verificarAlert() {
    alert("Eu amo JS");
}

function perguntaCidade() {
    let cidade = prompt("Coloque o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você `);
}

function calculo () {
    let valor1 = prompt("Digite um número inteiro:");
    let valor2 = prompt ("Digite outro valor inteiro:");
    let resultado = parseFloat(valor1)+ parseFloat(valor2);
    alert(`O resultado da soma entre ${valor1} e ${valor2} é ${resultado}`);
}