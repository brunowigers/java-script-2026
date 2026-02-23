function calculaJuroSimples (capital, taxa, tempo){
    let juros = captal * (taxa /100) * tempo;
    let montante = capital + juros;
    
    return montante;

}

let conta1 = calculaJuroSimples(5000, 4, 6);
console.log("o montante é R$" + conta1);