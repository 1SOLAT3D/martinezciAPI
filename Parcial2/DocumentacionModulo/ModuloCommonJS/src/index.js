/**
 * Array de frases
 * @type {string[]}
 */
let frases = ["Frase 1: Hola", "Frase 2: Como estás? :3", "Frase 3: Adios <3"];

/**
 * Obtiene una frase del Array en funcion del índice proporcionado
 *
 * @param {number} indice - El índice de la frase que se desea obtener.
 * @returns {string} La frase correspondiente al índice proporcionado.
 */
export function obtieneFrase(indice) {
    return frases[indice];
}

/**
 * Exporta la función obtieneFrase como un módulo
 *
 * @module
 * @exports {Function} obtieneFrase - Función para obtener una frase del Array.
 */
module.exports.obtieneFrase = obtieneFrase;
