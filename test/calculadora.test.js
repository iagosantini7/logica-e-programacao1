const { somarDoisNumeros } = require('../src/calculadora.js');
const { expect } = require('chai');

describe('Testes de função de Soma', () => {
    it('A função deve ser capaz de somar dois números positivos', () => {
        //coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);
        //compara o resultado da função
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A funçãodeve ser capaz de somar uma número positivo e um negativo', () =>{
        //coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);
        //compara o resultado da função
        expect(resultadoDaSoma).to.equal(35);
    });
});