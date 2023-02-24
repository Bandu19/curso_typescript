(()=>{

    // FUNCIONES
    const hero:string =  'Flash'

    const returnName =():string => {
        return hero
    }

    const activateBatisignal = ():string => {
        return 'Batisignal activida'
    }

    /** Para las funciones es necesario declararlas de que tipo son
     *  ya que al retornarlas respetamos su valor unico que retorna
     */


    console.log(typeof activateBatisignal)


    const heroName = returnName()

    const mensaActivada =  activateBatisignal()

    console.log({heroName, mensaActivada})


})()