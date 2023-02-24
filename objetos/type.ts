(()=>{

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?:()=> string; // Devolviendo una funcion de tipo String
    }

    let flash:Hero = {
        name:'Barry Allen',
        age: 24,
        powers:['Super Velocidad', 'Viajar en el Tiempo']
    }

    let superman:Hero = {
        name:'Clark Kent',
        age: 60,
        powers:['Super velocidad'],
        getName() {
            return this.name        
        }
    }

    console.log(superman)

})()