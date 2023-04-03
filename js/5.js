//Solicitar ao usuário um número inteiro qualquer e, apresentar em um alert a raiz quadrada, raiz cúbica e a potência do valor.

let x = parseInt(prompt("Digite um número inteiro: "));

alert("A raiz quadrada de " + x + " é igual a " + Math.sqrt(x));
alert("A raiz cubida de " + x + " é igual a " + Math.cbrt(x), "<br>");
alert("A potência de " + x + " na base " + x + " é igual a " + Math.pow(x,x))
