function calculoIMC(peso, altura){
    let IMC = peso / (altura ** 2);
    console.log("seu IMC é," + IMC);

    if (IMC < 18.5) {
        console.log("clasificação: Abaixo do peso");
    }
else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("clasificação: Peso normal");
    }
else if (IMC >=  25 && IMC <= 29.9) {
        console.log("clasificação: Sobrepeso");
    }
else {
    console.log("classificação: obesidade ")
}

}
calculoIMC(66, 1.77)