(()=>{
    // String

    const batman: string ='Batman';
    const linternaVerda: string = 'Linterna Verde';
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`I'm ${batman}, and you're ${linternaVerda}`)
    console.log(batman.toUpperCase())

    /** Lo que se refiere es que si la variable
     *  tipo batman no tiene los caracteres mayores de 11
     *  logicamente devulve un UNDEFINED lo cual se le coloca
     *  el "?" vara que valide esa expresion.
     */
    console.log( batman[10]?.toUpperCase() || 'No hay datos')



})()