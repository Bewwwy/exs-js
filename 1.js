// Imprimir os números impares menores que 100 e exibir na janela do navegador, linha a linha com o título "Número 1", "Número 3" ...
let x = 0

for (let i = 1; i<=50; i++ ) {
    document.write("Número ", i + x,"<br>");
    x = i;
}
