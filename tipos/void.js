"use strict";
(() => {
    // VOID
    // Este es una Funcion
    function callSuperman() {
        return;
    }
    // Funcion de flecha
    const b = callSuperman();
    console.log(b);
    const callBatman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
