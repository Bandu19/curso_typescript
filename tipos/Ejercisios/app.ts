(() => {

  // Tipos
  const batman: string = 'Bruce'
  const superman: string = 'Clark'
  const existe: boolean = false;

  console.log({ batman, superman, existe })

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  parejaHeroes[0];
  parejaHeroes[1];
  console.log(parejaHeroes);

  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];
  villano[0];
  villano[1];
  villano[2];
  console.log(villano);

  // Arreglos
  const aliados: (string)[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
  console.log(aliados)

  const versionALiados: (string | number)[] = ['Mujer Maravilla', 1998, 'San', 'Flash'];
  versionALiados.push(879)
  console.log(versionALiados)

  //Enumeraciones

  enum Enumeraciones {
    acuaman = 0,
    batman = 1,
    flash = 2,
    superman = 100
  }
  const fuerzaFlash: Enumeraciones = Enumeraciones.flash;
  const fuerzaSuperman: Enumeraciones = Enumeraciones.superman;
  const fuerzaBatman: Enumeraciones = Enumeraciones.batman;
  const fuerzaAcuaman: Enumeraciones = Enumeraciones.acuaman;

  console.log({fuerzaFlash, fuerzaAcuaman, fuerzaBatman, fuerzaSuperman});


  //Funciones
  const activar_batiseñal=():(string|number)=>{
    return 'HOla Mundo';
  }
  console.log(activar_batiseñal());

  // function pedir_ayuda() {
  //   console.log('Auxilio!!!');
  // }

  const pedir_ayuda = ():void => {
    console.log('Auxilio!!!');
  }

  pedir_ayuda();


  // Aserciones de Tipo
  const poder: string = '1000'; // Devuelve como string
  // Se declara numero 
  const largoDelPoder: number = (poder as string).length ;
  console.log(largoDelPoder);


})()

