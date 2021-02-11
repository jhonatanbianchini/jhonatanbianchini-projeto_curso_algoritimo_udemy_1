/*nome : caractere
     idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreval("Digite a quantidade de verificações de idade: ")
     leia(limite)
     contador := 0
     enquanto contador < limite faca
              escreval("Digite o nome da pessoa: ")
              leia(nome)
              escreval("Digite a idade de ", nome ," : ")
              leia(idade)
              se idade > 18 entao
               escreval(nome," Voçê é maior de idade")
               senao
                escreval(nome," Voçê é menor de idade")
               fimse
               contador := contador +1
               fimenquanto*/

               function acaoBotao() {
                var idade, limite, contador

                limite = prompt("Digite a quantidade de verificações de idade:")
 
                contador = 0
 
                 while (contador < limite) {
                     nome = prompt("Digite o nome da pessoa: ")
                     idade = prompt("Digite a idade de "+ nome )
                     if (idade > 18) 
                         document.getElementById("paragrafo").innerText = nome + " Voce e maior de idade"
                     
                     else 
                         document.getElementById("paragrafo").innerText = nome + " Voce e menor de idade"
                 contador++
                   
                     
                 }
                   
               }

               