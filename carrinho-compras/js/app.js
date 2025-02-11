function adicionar (){

    for (let index = 0; index < array.length; index++) {
        const element = array[index];  
    
    let produtoSelecionado = document.getElementById("produto").value;
    let listaDeProdutos = [];
    let carrinhoDeCompras = 0;

    let valorProduto;
        switch (produtoSelecionado) {
            case "Fone de ouvido - R$100":
                    valorProduto = 100;
                break;

            case "Celular - R$1400":
                    valorProduto = 1400;
                break;
            case "Oculus VR - R$5000":
                    valorProduto = 5000;
                break;
        }
    
    listaDeProdutos = produtoSelecionado;
    carrinhoDeCompras = carrinhoDeCompras + valorProduto;

    console.log(listaDeProdutos);
    }

}
