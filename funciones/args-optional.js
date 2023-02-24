"use strict";
(() => {
    /** El simbolo de  "?" sirve para decir que si en la función
     *  no llegara a recibir un valor este me devuelva "Undefined"
     *  y si se retorna podemos devolver " || ''" para que no se rompa el
     */
    const fullName = (fistName, lastName) => {
        return `${fistName},${lastName || ""}`;
    };
    const name = fullName('Tony', 'Starw');
    console.log({ name });
})();
