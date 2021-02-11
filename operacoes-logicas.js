

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