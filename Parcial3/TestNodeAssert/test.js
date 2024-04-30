import { modulo } from './modulo.js';
import assert from 'assert';

function ejecutarPruebas() {
    assert.strictEqual(modulo(10, 3), 1, "10 % 3 should be 1");

    assert(isNaN(modulo(10, 0)), "Modulo by zero should return NaN");

    assert.strictEqual(modulo(-10, 3), -1, "-10 % 3 should be -1");

    assert.strictEqual(modulo(10, -3), 1, "10 % -3 should be 1");

    assert.strictEqual(modulo(-10, -3), -1, "-10 % -3 should be -1");

    console.log("Los test fueron superados");
}

ejecutarPruebas();