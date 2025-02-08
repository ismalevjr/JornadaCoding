let quantidadeJogosAlugados= 0 ;

function alterarStatus (id){

    let jogoClicado = document.getElementById(`game-${id}`);
    let statusBotao = jogoClicado.querySelector("a");
    let textoBotao = statusBotao.innerHTML;
    let statusImagem = jogoClicado.querySelector("div");

    if (textoBotao == "Alugar"){
    statusBotao.innerHTML = "devolver";
    textoBotao = statusBotao.innerHTML
    statusBotao.classList.add("dashboard__item__button--return");

    statusImagem.classList.add("dashboard__item__img--rented");

    quantidadeJogosAlugados++;
    

    }else{
    
    if(confirm("Deseja realmente devolver o jogo?") == true){
    statusBotao.innerHTML = "Alugar";
    textoBotao = statusBotao.innerHTML;
    statusBotao.classList.remove("dashboard__item__button--return");

    statusImagem = jogoClicado.querySelector("div");
    statusImagem.classList.remove("dashboard__item__img--rented"); 
    }   
    }
    console.log(quantidadeJogosAlugados)
}

