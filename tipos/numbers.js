"use strict";
(() => {
    // Numbers
    // let avengers; // Devuelve Undefined
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    /** "NaN" Se considera como un numero
     *  pero en cuestion de logica este es un
     *  claro error.
     *
     *  Por esa misma razon se debe agregar numeros
     *  mas no letras con numeros.
     */
    avengers = Number('55A');
    console.log({ avengers });
})();
