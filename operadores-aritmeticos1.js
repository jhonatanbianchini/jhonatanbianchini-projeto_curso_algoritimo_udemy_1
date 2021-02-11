/*resultado, valor1, valor2, valor3: inteiro
          

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
          escreva("Digite a primeira nota: ")
          leia(valor1)
          escreva("Digite a segunda nota: ")
          leia(valor2)
          escreva(" Digite o valor para multiplicacao: ")
          leia(valor3)
          

          resultado := (valor1 + valor2) *valor3
          escreval("resultado correspondente e: ", resultado)*/

          var valor1, valor2, valor3, resultado

          valor1 = prompt("Digite a primeira nota: ")
          valor2 = prompt("Digite a segunda nota: ")
          valor3 = prompt("Digite o multiplicador do valor: ")

          resultado = (parseInt(valor1) + parseInt(valor2) ) * parseInt(valor3)

          alert("Resultado da conta: "+ resultado)

