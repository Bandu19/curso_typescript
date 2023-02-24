(()=>{
    //? Ejemplo 1
    const avangersArr  = ['Cap. America', 'Ironman', 'Hulk']    
    const iroman = avangersArr[1]
    // console.log({iroman})


    //? Ejemplo 2
    const pruebaAvenger:(string | number | boolean)[] = ['Tony Stark',true,166686]
    const [nombre,verdad,numero] = pruebaAvenger;
    // console.log({nombre, verdad})

    //* TUPLA
    const avengerssArrs: [string,boolean,number] = ['Hulk',true, 6]
    const [capi,iro, capitan] = avengerssArrs;
    // console.log({capi,iro,capitan})

})()