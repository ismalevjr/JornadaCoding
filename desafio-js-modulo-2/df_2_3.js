//Ex01

function calculoImc(peso,altura) {
    return imc = peso/ altura**2*10;
}

calculoImc(90,195);
console.log(imc);

//Ex02


function numeroFatorial(numero){
    let contador = 1;

    while (numero > 1 ) {
        contador *= numero;
        numero --;
    } console.log(contador);
}

numeroFatorial(5);

//ex03
function conversaoDeDolar(dolares) {
    return dolares * 4.80;
}

let reais;
console.log(reais = conversaoDeDolar(150));

//ex04
let area;
let perimetro;

function calculoAreaEPerimetro (altura,largura) {
    area = largura * altura;
    perimetro = largura*2 + altura*2;
}

calculoAreaEPerimetro(5,10)
console.log(`A area deste retângulo é ${area} e o perímetro é ${perimetro}`);

//Ex05
let areaC;
let perimetroC;

function calculoAreaEPerimetroCirculo (raio) {
    areaC = 3.14 * raio**2 ;
    perimetroC = 2 * 3.14 * raio ;
}

calculoAreaEPerimetroCirculo(5)
console.log(`A area deste circulo é ${areaC} e o perímetro é ${perimetroC}`);

//Ex06
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }

  let numero = 7;
  mostrarTabuada(numero);