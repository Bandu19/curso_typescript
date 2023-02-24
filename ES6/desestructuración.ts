(() => {

    //? TIPADO DE MI OBJETO LITERAL
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;

    }

    //! ES MI OBJETO PERO YA CON DATOS 
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Down Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.486948
    }

    //* Esta es mi funcion llamando  como tal el TYPADO
    // const printAvenger= (value:Avengers)=>{
    const printAvenger = ({ironman, ...num}: Avengers) => {
        console.log(`${ironman}, su poder es: ${num.poder}, ${num.nick}`)
    }

    printAvenger(avengers)

    // const {poder, vision} = avengers


    // console.log(poder.toFixed(2),vision.toUpperCase())



})()