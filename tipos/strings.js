"use strict";
(() => {
    // String
    var _a;
    const batman = 'Batman';
    const linternaVerda = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}, and you're ${linternaVerda}`);
    console.log(batman.toUpperCase());
    /** Lo que se refiere es que si la variable
     *  tipo batman no tiene los caracteres mayores de 11
     *  logicamente devulve un UNDEFINED lo cual se le coloca
     *  el "?" vara que valide esa expresion.
     */
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay datos');
})();
