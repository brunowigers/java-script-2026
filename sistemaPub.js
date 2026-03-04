const readline = require('readline-sync');

console.log('sistema de acesso ao Pub do Bruno');

const nome = readline.question("qual seu nome?");
const idade = readline.question("qual sua idade?");

if (idade >= 18){
    console.log(`Olá ${nome}, sua entrada foi Autorizada.`);
    const querBeber = readline.keyInYN("deseja ver as bebidas?");
    if (querBeber){
        console.log("garçom a caminho!");
    } else{
        console.log("temos suco também");
    }

} else if (idade >= 16){
    console.log(`Olá ${nome}, você precisa estar acompanhado..`)
} else{
    console.log(`Sinto muito ${nome}, Apenas maiores que 16 podem beber!`)
}



