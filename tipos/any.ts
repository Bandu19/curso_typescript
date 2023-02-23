(()=>{
    // ANY y tipo de CASTEO

    let avenger: any = 123;
    /** Para las constantes "CONST" 
     *  estas forsozamente deben estar 
     *  declaradas a comparacion con los "LET".
    */
    // const exists;

    avenger= 'Dr Strange';
    console.log(avenger.charAt(0));

    avenger = 150.156465465
    console.log(avenger.toFixed(2));
    
    
    let exists: any = 65489;
     /** Aqui aplicamos el tipo de casteo 
      * 
     */
    exists= 'Spiderman'
    console.log((exists as string).toUpperCase())

    let power: any = 132;
    
    power = 51656514.165456465

    console.log((power as number).toFixed(2));


    console.log(exists);
    console.log(power)



})()