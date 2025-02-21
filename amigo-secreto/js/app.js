// Cria o array responsável por armazenar os nomes
let listaNomes = [];

// Botão responsável por adicionar os nomes digitados na lista de sorteio
function adicionar(){
    // Resgata o elemento input para podermos coletar os nomes
    let amigosIncluidos = document.getElementById('nome-amigo');
    // Inclui estes nomes coletados no array
    listaNomes.push(amigosIncluidos.value);

    // Resgata a caixa o item HTML para mostrarmos na tela os nomes da lista
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = listaNomes;

    //Limpa a caixa input toda vez que é adcionado um nome na lista de sorteio
    amigosIncluidos.value = "";
}

function sortear(){
 
}

function reiniciar () {
    
}