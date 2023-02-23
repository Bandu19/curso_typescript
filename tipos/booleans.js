"use strict";
(() => {
    // Booleans
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman });
    /** Se tiene que declarar un valor
     *  antes de hacer un console.log */
    let prueba;
    // console.log(prueba)
    let isLinternaVerde = false;
    /** Cuando se retorna un valor de tipo boolean
     *  solo debes retornar el tipo boolean que
     *  elegiste.
     */
    isLinternaVerde = (isBatman) ? true : false;
    console.log({ isLinternaVerde });
})();
