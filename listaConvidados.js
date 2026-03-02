const readline = require('readline-sync');

let listaFinal = "";
let contador = 0;
let continuar = "s";

console.log("cadastro de convidados.");

while (continuar === "s"){
    contador++;
    let nome = readline.question(`digite o nome do convidado ${contador}:`)
    let idade = readline.question(`digite a idade do convidado ${nome}:`)

    listaFinal += `${contador}. nome: ${nome} idade: ${idade}\n`;

    continuar = readline.question("deseja cadastra mais alguém? (s/n)");

}

console.log("CONVIDADOS CADASTRADOS:")

if(listaFinal ===""){
    console.log("ninguem foi convidado:");
} else{
    console.log(listaFinal);
}