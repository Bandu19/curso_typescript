"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
    console.log(superman);
})();
