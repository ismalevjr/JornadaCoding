let pista = parseInt(document.getElementById("qtd-pista").textContent);
let CadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
let CadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);


function comprar(){
    //Resgatando os valores escolhidos no input
    let tipoIngressoCompra = document.getElementById('tipo-ingresso').value;
    let qtdIngressoCompra = parseInt(document.getElementById('qtd').value);

    switch (tipoIngressoCompra) {
        case "pista":
            if(qtdIngressoCompra <= pista){
                pista = pista - qtdIngressoCompra;
                let textoPista = document.getElementById(`qtd-${tipoIngressoCompra}`)
                textoPista.innerHTML = pista;
                break;
                }else{
                    alert("Ingresso esgotado, procure a próxima sessão")
                }
    
        case "superior":
            if(qtdIngressoCompra <= CadeiraSuperior){
                CadeiraSuperior= CadeiraSuperior- qtdIngressoCompra;
                let textoSuperior = document.getElementById(`qtd-${tipoIngressoCompra}`)
                textoSuperior.innerHTML = CadeiraSuperior;
                break;
                }else{
                    alert("Ingresso esgotado, procure a próxima sessão")
                }
    
        case "inferior":
            if(qtdIngressoCompra <= CadeiraInferior){
            CadeiraInferior = CadeiraInferior - qtdIngressoCompra;
            let textoInferior = document.getElementById(`qtd-${tipoIngressoCompra}`)
            textoInferior.innerHTML = CadeiraInferior;
            break;
            }else{
                alert("Ingresso esgotado, procure a próxima sessão")
            }
    
        default:
            alert(" verifique se todos os campos estão preenchidos corretamente")
            break;

    }
        

}