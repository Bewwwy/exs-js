// Exibir em uma página html os 10 primeiros números da sequência de Fibonacci, apresentando uma imagem sobre a série.

a = -1;
b = 1;
c = 0;
for(i = 0; i < 10; i++) {
    c = a + b;
    a = b;
    b = c;
    document.write(c + "<br>");
}