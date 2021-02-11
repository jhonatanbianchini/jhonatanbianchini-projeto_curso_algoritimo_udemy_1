/*nota1, nota2, media: real
         nome: caractere
         passou: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
         escreva("Digite seu nomme: ")
         leia(nome)
         escreval("Digite sua nota: ")
         leia(nota1)
         escreval("Digite sua segunda nota: ")
         leia(nota2)
         
         media := (nota1 + nota2) /2
         
         se media >=5 entao
         passou:= verdadeiro
         fimse
         
         se (passou) && (media >= 5 || media >=7) entao
         escreval("Aprovado!!!!")
         senao
         escreval("Reprovado!!!")
         fimse*/

var nome, nota1, nota2, media;

passou = false;
nome = prompt("Digite o seu nome: ")
nota1 = prompt("Digite a sua primeira nota: ")
nota2 = prompt("Digite Sua segunda nota:  ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 5) {
    passou = true
}
if(passou && (media >= 7 && media <= 9)){
    alert("Aprovado! "+ nome)
}
else{
    alert("Reprovado "+nome+", tente novamente...")
}