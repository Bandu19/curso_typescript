(()=>{

    /** Son Argumentos requeridos */

    // const fullName = (fistName: string, lastName: (string| boolean)): string =>{
    const fullName = (fistName: string, lastName: string): string =>{        
        return `${fistName}, ${lastName}`;
    }

    const name = fullName('Tony', 'Stark')

    console.log({name})

    const fechaNacimiento = (dia:number, mes:string, año:number, verdad:boolean )
                            :(string|number| boolean) =>{

        return `${dia} de ${mes} del ${año}, MODO: ${verdad}`
    }

    const fecha = fechaNacimiento(11,'Octubre',2003, false)

    console.log({fecha})


})()