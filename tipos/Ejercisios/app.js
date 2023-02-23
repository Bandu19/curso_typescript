"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    console.log({ batman, superman, existe });
    // Tuplas
    const parejaHeroes = [batman, superman];
    parejaHeroes[0];
    parejaHeroes[1];
    console.log(parejaHeroes);
    const villano = ['Lex Lutor', 5, true];
    villano[0];
    villano[1];
    villano[2];
    console.log(villano);
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log(aliados);
    const versionALiados = ['Mujer Maravilla', 1998, 'San', 'Flash'];
    versionALiados.push(879);
    console.log(versionALiados);
    //Enumeraciones
    let Enumeraciones;
    (function (Enumeraciones) {
        Enumeraciones[Enumeraciones["acuaman"] = 0] = "acuaman";
        Enumeraciones[Enumeraciones["batman"] = 1] = "batman";
        Enumeraciones[Enumeraciones["flash"] = 2] = "flash";
        Enumeraciones[Enumeraciones["superman"] = 100] = "superman";
    })(Enumeraciones || (Enumeraciones = {}));
    const fuerzaFlash = Enumeraciones.flash;
    const fuerzaSuperman = Enumeraciones.superman;
    const fuerzaBatman = Enumeraciones.batman;
    const fuerzaAcuaman = Enumeraciones.acuaman;
    console.log({ fuerzaFlash, fuerzaAcuaman, fuerzaBatman, fuerzaSuperman });
    //Funciones
    const activar_batiseñal = () => {
        return 'HOla Mundo';
    };
    console.log(activar_batiseñal());
    // function pedir_ayuda() {
    //   console.log('Auxilio!!!');
    // }
    const pedir_ayuda = () => {
        console.log('Auxilio!!!');
    };
    pedir_ayuda();
    // Aserciones de Tipo
    const poder = '1000'; // Devuelve como string
    // Se declara numero 
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
