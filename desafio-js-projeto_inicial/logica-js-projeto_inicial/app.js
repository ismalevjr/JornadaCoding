//Desafio 1

alert ("Boas vindas ao nosso site de validação de habilitação !");

let nome = prompt("Digite seu nome completo : ");
let idade = prompt("Agora digite sua idade : ");

if (idade >= 18) {
    alert(`Pode tirar a habilitação Sr.(a) ${nome}, o senhor(a) já possui a maior idade`);
}else {
    alert ("O (a) Sr.(a) não possui a idade necessária para retirada da habilitação");
}

let diaSemana = prompt("Que dia é da semana é hoje ?");



if(diaSemana == "Sábado"){
    alert("Bom final de semana !!!");
}else if(diaSemana == "Domingo"){
    alert("Bom final de semana !!!")   ;
}else{
    alert("Boa semana !!! Consulte os dias disponíveis para agendamento");
}

alert("Enquanto aguarda podemos jogar um jogo de adivinhação do número secreto");


let numeroSecreto = prompt("Digite um número:");
let paridade = 0;

if (numeroSecreto % 2 == 0) {
    paridade = "par";
}else{
    paridade = "ímpar";
}

if ( numeroSecreto <= 100) {
    alert(`Parabéns você venceu !! e o número ${numeroSecreto} é ${paridade}`);
} else {
    alert("Tente novamente para ganhar");
}

let saldo = 150;

alert(`Acabamos de conferir e o saldo da sua conta é : ${saldo}`);


