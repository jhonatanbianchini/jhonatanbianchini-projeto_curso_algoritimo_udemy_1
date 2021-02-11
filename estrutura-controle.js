/*escreva("Digite o nome: ")
leia(nome)
escreval("Digite uma nota: ")
leia(nota1)
escreval("Digite outra nota: ")
leia(nota2)
media := (nota1 + nota2) /2

se media >=6 entao
escreval(" Voçê conseguiu sua nota é ", media , ", Parabéns!!!!!!")
senao
escreval("Que pena sua nota é ", media , " tente novamente")*/

var nome, nota1, nota2, media;

nome = prompt("Digite o seu nome: ")
nota1 = prompt("Digite a sua primeira nota: ")
nota2 = prompt("Digite Sua segunda nota:  ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if( media >=6){
    alert("Voce conseguiu "+ nome +" sua nota e "+ media+", Parabens!!!!!")
}
else{
    alert("Que pena "+ nome +" sua nota e "+ media+", tente novamente...")
}