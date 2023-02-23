(()=>{

    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.max
    console.log(currentAudio)


    console.log(AudioLevel)


    enum PruebaLevel {
        min = 6,// Valor minimo
        medium , // El valor siguiente del minimo que en este caso seria "7"
        max = 99 // Valor Maximo
    }

    let currentPrueba =  PruebaLevel.max

    console.log(currentPrueba)
    console.log(PruebaLevel)


    let currentPrueba2: PruebaLevel = PruebaLevel.max;

    console.log(currentPrueba2)



})()