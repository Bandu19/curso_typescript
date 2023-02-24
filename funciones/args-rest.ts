(()=>{

    // Rest Arguments
    /**
     *  Apartir de que se declara los restArguments los demas 
     *  tienen que respetar la posicion de su declaración por decir
     *  si se declaro ...restArgs:string[] ah partir de ahi todos los 
     *  demas parametros tienen que ser string.
     */

    const fullName = (firstName:string, ...restArgs:string[]): string =>{
        
        return `${firstName} ${restArgs.join(' ')}`;
    }

    // const superman =  fullName('Clark', 'Joseph', 'Kent')
    // const superman =  fullName('Clark', 'Joseph')
    const superman =  fullName('Clark') // Esto es valido

    console.log({superman})


    const fullNamePrueba = (firstName: string, ...restArgs:number[]):string =>{
        return `${firstName} ${restArgs.join(' ')}`;
    }
    // A partir de aqui se declara primer parametro como string y los demas valores numericos
        // si se coloca un string en el ultimo parametro nos manda un error
    const supermanPrueba =  fullNamePrueba('Bruce', 16, 178, 19.445)

    console.log({supermanPrueba})


})()