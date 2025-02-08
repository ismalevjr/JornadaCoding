
function sortear(){
   let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
   let numeroMinimo = parseInt(document.getElementById("de").value);
   let  numeroMaximo = parseInt(document.getElementById("ate").value);

   if ( quantidadeDeNumeros > numeroMaximo) {
      alert("Verifique a quantidade de números, ela não pode ser maior que o número máximo")
   }if(quantidadeDeNumeros > (numeroMaximo - numeroMinimo + 1 ) ) {
      alert("A quantidade de números precisa caber dentro intervalo selecionado, verifique os números digitados")
   }else{
   let listaDeNumerosSorteados = [];
   let numeroSorteado;

   for (let i = 0; i < quantidadeDeNumeros; i++) {
      numeroSorteado = gerarNumeroAleatorio(numeroMinimo,numeroMaximo);

      while (listaDeNumerosSorteados.includes(numeroSorteado)) {
         numeroSorteado = gerarNumeroAleatorio(numeroMinimo,numeroMaximo) ;
      }

      listaDeNumerosSorteados.push(numeroSorteado);
   }
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = ` <label class="texto__paragrafo" id="numero_sorteado">Números sorteados:  ${listaDeNumerosSorteados}</label>`
   alterarStatusBotaoReiniciar();
}
}


function gerarNumeroAleatorio (min,max) {
   return Math.floor(Math.random()*(max-min+1))+min;
}

function alterarStatusBotaoReiniciar(){
   let botaoReiniciar = document.getElementById("btn-reiniciar");
   
   if( botaoReiniciar.classList.contains("container__botao-desabilitado")){
      botaoReiniciar.classList.remove("container__botao-desabilitado");
      botaoReiniciar.classList.add("container__botao");
   }else{
      botaoReiniciar.classList.remove("container__botao");
      botaoReiniciar.classList.add("container__botao-desabilitado");
   }
}

function reiniciar (){
   (document.getElementById("quantidade").value) = "";
   (document.getElementById("de").value) = "";
   (document.getElementById("ate").value) = "";
   document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo" id="numero_sorteado">Números sorteados: nenhum até agora</label>';
   alterarStatusBotaoReiniciar();
}
