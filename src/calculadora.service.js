function CalculadoraService() {

    const SOMA = "+"
    const SUBTRACAO = "-"
    const DIVISAO = "/"
    const MULTIPLICACAO = "*"
    const PORCENTAGEM = "%"

    function calcular(numero1, numero2, operacao){
        let resultado

        switch(operacao) {
            case SOMA: resultado = numero1 + numero2
            break
            case SUBTRACAO: resultado = numero1 - numero2
            break
            case DIVISAO: resultado = numero1 / numero2
            break
            case MULTIPLICACAO: resultado = numero1 * numero2
            break
            case PORCENTAGEM: resultado = numero1 / 100
            break
            default: resultado = 0
        }
        return resultado 
    }

    function concatenarNumero(numAtual, numConcat) {
        // caso contenha apenas '0' ou null, reinicia o valor

        // primeiro digito for '.', concatena o '0' antes do ponto
    }

    return [calcular, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO, PORCENTAGEM]
}

export default CalculadoraService