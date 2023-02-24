(()=>{

    /** El simbolo de  "?" sirve para decir que si en la función 
     *  no llegara a recibir un valor este me devuelva "Undefined"
     *  y si se retorna podemos devolver " || ''" para que no se rompa el
     */

    const fullName = (fistName: string, lastName?: string): string =>{        
        return `${fistName},${lastName || ""}`;
    }

    const name = fullName('Tony', 'Starw')

    console.log({name})



})()