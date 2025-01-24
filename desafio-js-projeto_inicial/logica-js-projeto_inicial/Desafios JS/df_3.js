let nome = prompt("Seja bem vindo ao nosso site !!, qual seu nome ?");
alert(`Olá ${nome}`);
let idade = prompt("E qual a sua idade ?");

if (idade > 18) {
    alert("Você já é maior de idade");
} else {
    alert("Você ainda não atingiu a maior idade");
}

let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta");
console.log(linguagemPreferida);

let valor1 = prompt (`Digite um número : `)
if (valor1 > 0) {
    alert(`O número ${valor1} digitado é positivo`);
} else {
    alert(`O número ${valor1} digitado é negativo`);   
}

let valor2 = 16;
let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é de ${resultado}`);

let contador = 0;
while (contador <= 10 ) {
    console.log(`contador : ${contador}`);
        contador++;
}

let nota = 10
if (nota > 7 ) {
    alert(`Você foi aprovado com a  nota : ${nota}`);
} else {
    alert(`você foi reprovado com a nota : ${nota}`)
}

alert(parseInt(Math.random()*1000+1))