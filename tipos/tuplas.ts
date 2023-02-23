(()=>{
    // Tuplas

    const hero: [string, number, boolean] = ['Hola',123, false];
    console.log(hero);

    hero[0] = 'Como estas';
    hero[1] = 50;
    hero[2] = true;

    console.log(hero);

})()