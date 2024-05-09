import { chai } from 'chai';
import { calcularArea } from './modulo.js';

describe("Ver si el resultado es igual", () => {
    
    it('Si le mando 2827.4333882308138 debe ser cierto', () => {
        let resultado = calcularArea(30);
        chai.strictEqual(resultado, 2827.4333882308138);
    });

});