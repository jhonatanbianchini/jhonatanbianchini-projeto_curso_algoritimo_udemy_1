

var numero, fatorial, contador

function acaoBotao(params) {
    numero = prompt("Digite o numero pra calcular o fatorial: ")
fatorial = 1
for (contador = 1; contador <= numero; contador++) {
    fatorial = fatorial * contador;
    
}

document.getElementById("paragrafo").innerText = "Fatorial de "+ numero +" e : "+ fatorial
    
}
