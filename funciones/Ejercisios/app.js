"use strict";
(() => {
    //! PRIMER EJERCISIO
    const sumar = (a, b) => {
        return a + b;
    };
    let funcionSumar = sumar(1, 2);
    console.log(funcionSumar);
    //! SEGUNDO EJERCISIO
    // LLAMAMOS UN VALOR tipo string con un array pero devolvemos un valor NUMBER
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    const resulHeroes = contar(superHeroes);
    console.log(resulHeroes);
    //! TERCER EJERCISIO
    // LLAMAMOS UN VALOR tipo boolean pero devolvemos un valor VACIO
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log('Batiseñal Activada');
        }
    };
    llamarBatman(true);
    //! CUARTO EJERCISIO
    const unirHeroes = (...personas) => {
        return `${personas.join(",")}`;
    };
    const resultUnirHeroes = (unirHeroes('Hola'));
    console.log(resultUnirHeroes);
    //! QUINTO EJERCISIO
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHacerNadaTampoco;
    noHacerNadaTampoco = noHaceNada;
    console.log({ noHacerNadaTampoco });
})();
