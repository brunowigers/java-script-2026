let saldoConta = 500;
let precoIngresso = 900; 

console.log("tentando comprar o ingresso...")

if (saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso;
    console.log("compra realizada, bom show!");
    console.log("seu troco é R$:" + troco)
} else {
    console.log("saldo insuficiente. faltam R$:" + (precoIngresso - saldoContra))
}