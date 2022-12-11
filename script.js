const texto = document.getElementById("texto");
const valor1 = 20;
const valor2 = 50;

function divisao() {
    resDiv = valor1 / valor2;
    texto.innerText = resDiv;
}

divisao();