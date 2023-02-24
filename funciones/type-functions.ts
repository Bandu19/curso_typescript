 (()=>{
    // Function Types
    const addNumbers =(a:number, b:number)=>{
        return a + b;
    }
    const greet = (name:string)=>`Hola ${name}`;
    const saveTheWordl = () => `El mundo esta salvado!`;

    const pruebaUndefined = ()=> undefined;
    
    //! sadasd
    
    //* *myFunction = 10
    //* console.log(myFunction) // 10
    
    //? let myFunction: (x:number, y:number) =>number;

    //? myFunction = addNumbers
    //? console.log(myFunction(1,2)) // 3
    
    //* let myFunction: (x:string) =>string;

    //* myFunction = greet
    //* console.log(myFunction('OSCAR')) // 'Hola Fernando'

    // let myFunction: () =>string

    // myFunction = saveTheWordl
    // console.log(myFunction()) //! 'El mundo esta salvado'


    let prueba: ()=> void;
    prueba = pruebaUndefined
    
    console.log(prueba())






})()