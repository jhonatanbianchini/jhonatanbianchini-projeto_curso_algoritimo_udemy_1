/*numero, fatorial, contador : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
        escreval("Digite o numero pra calcular o fatorial: ")
        leia(numero)
        fatorial := 1
        para contador de 1 ate numero faca
             fatorial := fatorial * contador
             fimpara
             escreval("Fatorial de ", numero ," é : ", fatorial)
*/

var numero, fatorial, contador

function acaoBotao(params) {
    numero = prompt("Digite o numero pra calcular o fatorial: ")
fatorial = 1
for (contador = 1; contador <= numero; contador++) {
    fatorial = fatorial * contador;
    
}

document.getElementById("paragrafo").innerText = "Fatorial de "+ numero +" e : "+ fatorial
    
}
