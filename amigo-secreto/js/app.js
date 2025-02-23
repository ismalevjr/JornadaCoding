// Cria o array responsável por armazenar os nomes
let listaNomes = [];

// Resgata o paragrafo para adição das listas de nomes
let listaSorteio = document.getElementById('lista-sorteio');

// Resgata o elemento input para podermos coletar os nomes
let amigosIncluidos = document.getElementById('nome-amigo');


// Resgata a caixa o item HTML para mostrarmos na tela os nomes da lista
let listaAmigos = document.getElementById('lista-amigos');


// Botão responsável por adicionar os nomes digitados na lista de sorteio
function adicionar(){
    
    
    // Inclui estes nomes coletados no array
    listaNomes.push(amigosIncluidos.value);

    
    listaAmigos.innerHTML = listaNomes;
    listaAmigos.se

    //Limpa a caixa input toda vez que é adcionado um nome na lista de sorteio
    amigosIncluidos.value = "";
}

function sortear(){
    embaralha(listaNomes);
    

    for (let i = 0 ; i < listaNomes.length; i++) {

        if(i == listaNomes.length - 1 ){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[0] + '<br>';    
        }else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes[i] + ' --> ' + listaNomes[i+1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
  listaSorteio.textContent = "";  
  listaAmigos.textContent = "";
  listaNomes = [];
}