// Ex 1 e Ex 2 
function saudacao (texto) {
    console.log(`olá, ${texto} !`);
}

saudacao("Ismael");

//Ex 3 

function calculoDobro (numero) {
    let dobro = numero * 2 
    console.log(dobro)
}

calculoDobro(150);

//Ex 4

function calculoMedia (numero1,numero2,numero3) {
    let soma = numero1 + numero2 + numero3;
    let media = soma/3;
    console.log(media)
}

calculoMedia(150,200,500)

//Ex5
function verificaMaior(valor1, valor2) {
    let numeroMaior;

    if(valor1 > valor2){
        numeroMaior = valor1;
    }else{
        numeroMaior = valor2;
    }
    console.log(numeroMaior);
}
verificaMaior(15,10)

//Ex6
function MultiplicaçãoSiMesmo (numero) {
    let multiplicação = numero * numero;
    console.log(multiplicação)
}

MultiplicaçãoSiMesmo(100)