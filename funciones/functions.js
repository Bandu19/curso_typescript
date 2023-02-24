"use strict";
(() => {
    // FUNCIONES
    const hero = 'Flash';
    const returnName = () => {
        return hero;
    };
    const activateBatisignal = () => {
        return 'Batisignal activida';
    };
    /** Para las funciones es necesario declararlas de que tipo son
     *  ya que al retornarlas respetamos su valor unico que retorna
     */
    console.log(typeof activateBatisignal);
    const heroName = returnName();
    const mensaActivada = activateBatisignal();
    console.log({ heroName, mensaActivada });
})();
//# sourceMappingURL=functions.js.map