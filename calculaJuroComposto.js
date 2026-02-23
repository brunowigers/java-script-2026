function calculaJuroComposto(capital, taxa, tempo){
    let montante = capital * (1 + (taxa/100)) ** tempo;

    return montante;

}

let conta1 = calculaJuroComposto(5000, 4, 6);
console.log("o montanteé R$" + conta1.toFixed(2))