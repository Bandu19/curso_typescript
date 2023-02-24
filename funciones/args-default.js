"use strict";
(() => {
    /**
     * Esto ocurre porque sí, lastName es opcional, pero si lo declaras como segundo argumento,
     * y luego tienes después más argumento, no tienes forma de decirle a TypeScript que ese true hace referencia al upper.
     * Actualmente está interpretando que ese true se lo pasas a lastName, de ahí que no te imprima nada, y si le pasas
     * un string vacío sí porque ese true ya hace referencia al upper.
     * Por como tenemos los argumentos, actualmente podemos obviar poner upper ya que por defecto será false,
     * pero si quieres obviar el lastName, y luego establecer el upper, entonces tienes que mover
     * el lastName al último parámetro después del upper y ahí si podrías únicamente indicar el firstName y upper funcionando correctamente.
     */
    const fullName = (fistName, lastName, upper = false) => {
        if (upper) {
            return `${fistName},${lastName || "No lastname"}`.toUpperCase();
        }
        else {
            return `${fistName},${lastName || "No lastname"}`;
        }
    };
    const name = fullName('Tony', 'GUS', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map