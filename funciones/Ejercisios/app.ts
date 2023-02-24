(() => {
    //! PRIMER EJERCISIO
    const sumar = (a: number, b: number): number => {
        return a + b
    }

    let funcionSumar = sumar(1, 2)
    console.log(funcionSumar)

    //! SEGUNDO EJERCISIO
    // LLAMAMOS UN VALOR tipo string con un array pero devolvemos un valor NUMBER
    const contar = (heroes: string[]): number => {
        return heroes.length;
    }

    const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    const resulHeroes = contar(superHeroes)
    console.log(resulHeroes)

    //! TERCER EJERCISIO

    // LLAMAMOS UN VALOR tipo boolean pero devolvemos un valor VACIO
    const llamarBatman = (llamar: boolean): void => {
        if (llamar) {
            console.log('Batiseñal Activada')
        }
    }

    llamarBatman(true)

    //! CUARTO EJERCISIO
    const unirHeroes = (...personas: string[]):string => {
        return `${personas.join(",")}`
    }
    const resultUnirHeroes = (unirHeroes('Hola'))
    console.log(resultUnirHeroes)

    //! QUINTO EJERCISIO
    const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo:string[]): void => { }

    let noHacerNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;
    noHacerNadaTampoco = noHaceNada

    console.log({noHacerNadaTampoco})



})()