alert ("Boas vindas ao nosso site de validação de habilitação !");

let nome = prompt("Digite seu nome completo : ");
let idade = prompt("Agora digite sua idade : ");

if (idade >= 18) {
    alert(`Pode tirar a habilitação Sr.(a) ${nome}, o senhor(a) já possui habilitação`)
}else {
    alert ("O (a) Sr.(a) não possui a idade necessária para retirada da habilitação")
}



