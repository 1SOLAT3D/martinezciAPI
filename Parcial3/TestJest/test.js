import { modulo } from './modulo.js';

describe('Pruebas de la función modulo', () => {
  test('10 % 3 debería ser 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('El módulo por cero debería devolver NaN', () => {
    expect(isNaN(modulo(10, 0))).toBe(true);
  });

  test('-10 % 3 debería ser -1', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('10 % -3 debería ser 1', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('-10 % -3 debería ser -1', () => {
    expect(modulo(-10, -3)).toBe(-1);
  });
});
