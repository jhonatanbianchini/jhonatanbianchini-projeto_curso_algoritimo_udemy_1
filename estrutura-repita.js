/*sairLoop : caractere
       valor1, valor2 : real
       

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
       repita
             escreval("Digite o primeiro valor: ")
             leia(valor1)
             escreval("Digite o segundo valor: ")
             leia(valor2)
             escreval("O resultado é: ", valor1 + valor2)
             escreval("Deseja sair S/N")
             leia(sairLoop)
       ate sairLoop <> "n"*/

        
       function acaoBotao() {
        var sairLoop, valor1, valor2
        do{ 
            valor1 = prompt("Digite o primeiro valor: ")
            valor2 = prompt("Digite o segundo valor: ")
            document.getElementById("paragrafo").innerText = "Resultado: "+ (parseInt(valor1) + parseInt(valor2))
            sairLoop = prompt("Deseja sair S/N")
        }while (sairLoop |= "n") 
        
    }