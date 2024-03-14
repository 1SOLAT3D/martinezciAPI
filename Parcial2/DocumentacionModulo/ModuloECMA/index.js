/**
 * Obtiene una frase del arreglo asincrónicamente utilizando Promesas
 *
 * @param {number} n - El índice de la frase que se desea obtener
 * @returns {Promise<string>} Una Promesa que se resolverá con la frase correspondiente al índice proporcionado
 */
export function obtieneFrase(n) {
    /**
     * Un arreglo de frases.
     * @type {string[]}
     */
    const frases = ["Frase 1: Hola", "Frase 2: Como estas? :3", "Frase 3: Adios <3"];

    // Retorna una Promesa resuelta con la frase correspondiente al índice proporcionado
    return Promise.resolve(frases[n]);
}
