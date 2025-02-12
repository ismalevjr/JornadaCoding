let valorTotalCarrinho = 0;
function adicionar (){
    //Recuperar os valores: nome do produto, quantidade e valor
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidadeDeProdutos = document.getElementById('quantidade').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitario = produtoSelecionado.split('R$')[1];
    

    //Calcular o valor final do produto com base nas quantidades selecionadas.
   let preco = valorUnitario * quantidadeDeProdutos;
    // Adicionando produtos no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeDeProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
      </section>`;

    // Atualizar o valor total

    valorTotalCarrinho = valorTotalCarrinho + preco;

    let totalGeralCarrinho = document.getElementById('valor-total');
    totalGeralCarrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotalCarrinho}</span>
      </p>`;
    
}

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    let totalGeralCarrinho = document.getElementById('valor-total');
    let quantidadeDeProdutos = document.getElementById('quantidade');

    totalGeralCarrinho.innerHTML =`<span class="texto-azul" id="valor-total">R$${0}</span>
      </p>`;
    carrinho.innerHTML = "";
    quantidadeDeProdutos.innerHTML = `<input class="quantidade-input" id="quantidade" type="number" placeholder="100">`;

    

}


