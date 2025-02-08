function sortear(){
   let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
   let numeroMinimo = parseInt(document.getElementById("de").value);
   let  numeroMaximo = parseInt(document.getElementById("ate").value);

   for (let i = 0 ; i < quantidadeDeNumeros; i++) {
      let numeroSorteado = gerarNumeroAleatorio(numeroMinimo,numeroMaximo);
      alert(numeroSorteado);
   }
}


function gerarNumeroAleatorio (min,max) {
   return parseInt(Math.random()* (max - min) + min);
}

