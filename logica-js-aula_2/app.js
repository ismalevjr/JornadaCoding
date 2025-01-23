alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;
console.log(numeroSecreto);
let tentativas = 1;

//Enquanto chute não foi igual ao número secreto
while (chute =! numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 10");
    // se chute foir igual ao número secreti
    if( chute == numeroSecreto){
        
        alert (`Isso ai ! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    }else{
        if ( chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);   
        } else {
            alert(`O número secreto é maior qwue ${chute}`);
        }
        //tentativas = tentativas +1;
        tentativas++;
    }
}