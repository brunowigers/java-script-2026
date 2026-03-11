const readline = require('readline-sync');

let nomeHeroi = readline.question("Digite o nome do seu heroi: ");
let pontosXP = parseInt(readline.question("Digite uma quantidade de XP: "));

if (isNaN(pontosXP)) {
    console.log("Por favor, digite um número válido!");
} else {
    let categoria;
    
    if (pontosXP < 100) {
        categoria = "Iniciante";
    } else if (pontosXP < 500) {
        categoria = "Guerreiro";
    } else if (pontosXP < 1000) {
        categoria = "Mestre";
    } else {
        categoria = "Lenda Viva";
    }
    
    console.log("O herói " + nomeHeroi + " possui " + pontosXP + " de experiência e seu rank atual é: " + categoria);
}