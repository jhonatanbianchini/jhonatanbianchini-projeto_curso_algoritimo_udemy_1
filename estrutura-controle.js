

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