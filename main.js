"use strict";
(() => {
    const nuevoMsg = 'Hola Mundo!!';
    const hero = {
        name: 'Iroman',
        age: 445
    };
    console.log(nuevoMsg);
    console.log(hero);
    const vengadores = {
        nombre: 'Vengadores',
        edad: 25
    };
    vengadores.edad = 50;
    console.log(vengadores.edad + 1);
})();
(() => {
    const fullName = (fistName, lastName, upper = false) => {
        if (upper) {
            return `${fistName},${lastName || "No lastname"}`.toUpperCase();
        }
        else {
            return `${fistName},${lastName || "No lastname"}`;
        }
    };
    const name = fullName('Tony', 'GUS', true);
    console.log({ name });
})();
(() => {
    const fullName = (fistName, lastName) => {
        return `${fistName},${lastName || ""}`;
    };
    const name = fullName('Tony', 'Starw');
    console.log({ name });
})();
(() => {
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
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark');
    console.log({ superman });
    const fullNamePrueba = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const supermanPrueba = fullNamePrueba('Bruce', 16, 178, 19.445);
    console.log({ supermanPrueba });
})();
(() => {
    const hero = 'Flash';
    const returnName = () => {
        return hero;
    };
    const activateBatisignal = () => {
        return 'Batisignal activida';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
    const mensaActivada = activateBatisignal();
    console.log({ heroName, mensaActivada });
})();
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => `Hola ${name}`;
    const saveTheWordl = () => `El mundo esta salvado!`;
    const pruebaUndefined = () => undefined;
    let prueba;
    prueba = pruebaUndefined;
    console.log(prueba());
})();
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    let funcionSumar = sumar(1, 2);
    console.log(funcionSumar);
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    const resulHeroes = contar(superHeroes);
    console.log(resulHeroes);
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log('Batiseñal Activada');
        }
    };
    llamarBatman(true);
    const unirHeroes = (...personas) => {
        return `${personas.join(",")}`;
    };
    const resultUnirHeroes = (unirHeroes('Hola'));
    console.log(resultUnirHeroes);
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHacerNadaTampoco;
    noHacerNadaTampoco = noHaceNada;
    console.log({ noHacerNadaTampoco });
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    };
})();
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
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    console.log(batimovil);
    console.log(bumblebee);
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    console.log(villanos);
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis.miembros);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let avenger = 123;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.156465465;
    console.log(avenger.toFixed(2));
    let exists = 65489;
    exists = 'Spiderman';
    console.log(exists.toUpperCase());
    let power = 132;
    power = 51656514.165456465;
    console.log(power.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const number = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    number.push('16');
    console.log(number);
    const numbers2 = [1, 2, 3, 4, 5, 6];
    numbers2.push(66);
    console.log(numbers2);
    const villian = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villian.forEach(v => console.log(v.toUpperCase()));
    numbers2.map(value => {
        console.log(value);
    });
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman });
    let prueba;
    let isLinternaVerde = false;
    isLinternaVerde = (isBatman) ? true : false;
    console.log({ isLinternaVerde });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    let PruebaLevel;
    (function (PruebaLevel) {
        PruebaLevel[PruebaLevel["min"] = 6] = "min";
        PruebaLevel[PruebaLevel["medium"] = 7] = "medium";
        PruebaLevel[PruebaLevel["max"] = 99] = "max";
    })(PruebaLevel || (PruebaLevel = {}));
    let currentPrueba = PruebaLevel.max;
    console.log(currentPrueba);
    console.log(PruebaLevel);
    let currentPrueba2 = PruebaLevel.max;
    console.log(currentPrueba2);
})();
(() => {
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('AuxiliO');
    console.log('Hola Mundo');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerda = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}, and you're ${linternaVerda}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay datos');
})();
(() => {
    const hero = ['Hola', 123, false];
    console.log(hero);
    hero[0] = 'Como estas';
    hero[1] = 50;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function callSuperman() {
        return;
    }
    const b = callSuperman();
    console.log(b);
    const callBatman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    console.log({ batman, superman, existe });
    const parejaHeroes = [batman, superman];
    parejaHeroes[0];
    parejaHeroes[1];
    console.log(parejaHeroes);
    const villano = ['Lex Lutor', 5, true];
    villano[0];
    villano[1];
    villano[2];
    console.log(villano);
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    console.log(aliados);
    const versionALiados = ['Mujer Maravilla', 1998, 'San', 'Flash'];
    versionALiados.push(879);
    console.log(versionALiados);
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
    const activar_batiseñal = () => {
        return 'HOla Mundo';
    };
    console.log(activar_batiseñal());
    const pedir_ayuda = () => {
        console.log('Auxilio!!!');
    };
    pedir_ayuda();
    const poder = '1000';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=main.js.map