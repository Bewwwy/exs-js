// Solicitar ao usuário um número inteiro de 1 a 10 e calcular a tabuada deste número na janela do navegador, linha a linha.

let x = parseInt(prompt('Escolha um número inteiro de 1 a 10 para calcular a tabuada'));

if (x >= 1 && x <= 10 ){
    for (let i = 1; i<=10; i++ ) {
        document.write(x + " x " + i + " = " + x*i + "<br>");
    }
}
else {
    alert("Número inválido!")
}

