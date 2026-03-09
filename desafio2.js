const readline = require('readline-sync');

let corSemaforo = readline.question("digite a cor do semafaro: ");
let veiculoEmergencia = true;
 
if (veiculoEmergencia == false) {
    console.log("ALERTA: Ambulância detectada! Todos os sinais fechados. CRUZAMENTO LIVRE.");
}
else if (corSemaforo == "verde") {
    console.log("Pode passar! Siga com cuidado.");
}
else if (corSemaforo == "amarelo") {
    console.log("Atenção! Reduza a velocidade e prepare-se para parar.");
}
else {
    console.log("PARE! Aguarde o sinal verde.");
}
