const readline = require('readline-sync');

console.log("jogo da adivinhação, chute um número de 0 a 10: ");

const numerosecreto = Math.floor(Math.random()*10 + 1 );

let palpite = readline.questionInt("qual é o seu palpite?")
let tentativas = 1;

while (palpite != numerosecreto){
    if (palpite < numerosecreto){
        console.log("o número secreto é maior que seu chute.");
    }
else {
    console.log("o número secreto é menor que seu chute.")
}

palpite = readline.questionInt("tente de novo.");
tentativas++;

}
console.log(`parabéns, você acertou o ${numerosecreto} em ${tentativas} chutes`)