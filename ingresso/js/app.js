// Definir a quantidade estática de cada ingresso 

let disponivelPista = parseInt(document.getElementById('qtd-pista').textContent);
let disponivelSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let disponivelInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar (){
    // Recuperar o tipo de ingresso e a quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = document.getElementById('qtd').value;
    alert(tipoIngresso)

    // Selecionando o tipo de ingresso a ser debitado e executando o cálculo
    switch (tipoIngresso) {
        case  "pista":
            disponivelPista = disponivelPista - quantidadeIngresso;
            break;   
        case  "superior":
            disponivelSuperior = disponivelSuperior - quantidadeIngresso;
            break;   
        case  "inferior":
            disponivelInferior =  disponivelInferior - quantidadeIngresso;
            break;   
    }
    

}