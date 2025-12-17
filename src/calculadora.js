function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
    // 1. soma todos os valores
    const resultadoDaSoma = somarDoisNumeros(valor1, valor2)
    // 2. dividir pela quantidade de numeros passados
    const mediaDeDoisValores = resultadoDaSoma / 2;
    // 3. exibe o resultado
    return mediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}