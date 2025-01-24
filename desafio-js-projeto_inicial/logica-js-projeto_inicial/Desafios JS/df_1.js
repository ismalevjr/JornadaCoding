alert ("Boas vindas ao nosso site de validação de habilitação !");

let nome = prompt("Digite seu nome completo : ");
let idade = prompt("Agora digite sua idade : ");

if (idade >= 18) {
    alert(`Pode tirar a habilitação Sr.(a) ${nome}, o senhor(a) já possui a maior idade`);
}else {
    alert ("O (a) Sr.(a) não possui a idade necessária para retirada da habilitação");
}

alert("Gostaria de agendar sua primeira aula para retirada de habilitação ?");
let diaSemana = prompt("Por favor digite o dia da semana que representa hoje:");

if ( diaSemana = "Sábado") {
    alert("Bom final de semana, aguarde um dia útil para marcar suas aulas");
} else if(diaSemana = "Domingo"){
    alert("Bom final de semana, aguarde um dia útil para marcar suas aulas");
}else {
    alert("Boa semana, aguarde uns minutos para seu atendimento, enquanto isso vamos jogar um jogo de adivinhação ?");
}
let chute = prompt("Digite o número da sorte")
if ( chute <= 100) {
    alert(`Você ganhou !!! o número correto é ${chute} `);
} else {
    alert(`Tente novamente para ganhar`);
}
let saldo = 500
if ( saldo > 100) {
    alert(`Seu saldo é de ${saldo}, portanto positivo então podemos inicar os trâmites da matrícula.`);
} else {
    alert (`Infelizmente seu saldo é de ${saldo} neste caso não poderemos seguir com a matrícula.`);
}


