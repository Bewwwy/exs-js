/*Solicite ao usuário os dados de altura e sexo de 5 pessoas. Exiba no documento da página, quantas pessoas são do sexo 
masculino e quantas pessoas são do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher..*/

let altura = []
let genero = []

let m = 0
let h = 0

let maior = 0
let mgenero = ''
let g = ''

for(i = 0; i <= 4; i++) {
    a = parseFloat(prompt("Digite a altura da pessoa: "))
    b = parseInt(prompt("Digite '1' para feminino e '2' para masculino: "))

    altura.push(a)
    genero.push(b)
}

//document.write(altura, "<br>", genero, "<br>")

for(i = 0; i <= 4; i++) {
    if(genero[i] == 1) {
        m = m+1
    }
    else {
        h = h+1
    }
}


for(i = 0; i <= 4; i++) {
    if(altura[i] > maior) {
        maior = altura[i]
    }
}

if(altura[0] == maior){
    mgenero = genero[0]
}
else if(altura[1] == maior) {
   mgenero = genero[1] 
}
else if(altura[2] == maior){
    mgenero = genero[2]
}
else if(altura[3] == maior) {
   mgenero = genero[3] 
}
else {
    mgenero = genero[4]
}

if(mgenero == '1'){
    g = "feminino"
}
else {
    g = "masculino"
}

document.write("<p>A quantidade de pessoas do gênero feminino é: ", m, ", e do gênero masculino é: ", h, "</p>")
document.write("<p>A maior altura é: ", maior, " ", g, "</p>")