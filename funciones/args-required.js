"use strict";
(() => {
    /** Son Argumentos requeridos */
    // const fullName = (fistName: string, lastName: (string| boolean)): string =>{
    const fullName = (fistName, lastName) => {
        return `${fistName}, ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
    const fechaNacimiento = (dia, mes, año, verdad) => {
        return `${dia} de ${mes} del ${año}, MODO: ${verdad}`;
    };
    const fecha = fechaNacimiento(11, 'Octubre', 2003, false);
    console.log({ fecha });
})();
//# sourceMappingURL=args-required.js.map