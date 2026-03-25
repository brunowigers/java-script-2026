const notas = [7.5, 8.2, 9.6, 3.2];

let soma = 0;

for (i = 0;  i < notas.length; i++){
    soma = soma + notas[i];
}

const media = soma / notas.length;

console.log("a soma das notas é:" + soma.toFixed(2));
console.log("a média do aluno é:" + media.toFixed(2));