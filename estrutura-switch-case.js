/*valor1, valor2, resultado: real
     operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
      escreval("Programa para calcular valores baseado na operação")
      escreval("Digite o primeiro valor: ")
      leia(valor1)
      escreval("Digite a operação: Ex: +, -, *, /")
      leia(operacao)
      escreval("Digite o segundo valor: ")
      leia(valor2)
      
      escolha operacao
      caso "+"
      resultado := valor1 + valor2
      caso "-"
      resultado := valor1 - valor2
      caso "*"
      resultado := valor1 * valor2
      caso "/"
      resultado := valor1 / valor2
      fimescolha

      escreval("O resultado é: ", resultado)*/

      var valor1, valor2, resultado, operacao

      function acaoBotao(params) {

        valor1 = prompt("Digite o primeiro valor: ")
      operacao = prompt("Digite a operação: Ex: +, -, *, /")
      valor2 = prompt("Digite o segundo valor: ")

    switch (operacao){
        case "+": resultado = parseInt(valor1) + parseInt(valor2)
        break;
        case "-": resultado = parseInt(valor1) - parseInt(valor2)
        break;
        case "*": resultado = parseInt(valor1) * parseInt(valor2)
        break;
        case "/": resultado = parseInt(valor1) / parseInt(valor2)
        break;
    } 
     document.getElementById("paragrafo").innerText = resultado
          
      }

      
    
