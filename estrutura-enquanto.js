

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

               