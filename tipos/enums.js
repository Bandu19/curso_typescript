"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    let PruebaLevel;
    (function (PruebaLevel) {
        PruebaLevel[PruebaLevel["min"] = 6] = "min";
        PruebaLevel[PruebaLevel["medium"] = 7] = "medium";
        PruebaLevel[PruebaLevel["max"] = 99] = "max"; // Valor Maximo
    })(PruebaLevel || (PruebaLevel = {}));
    let currentPrueba = PruebaLevel.max;
    console.log(currentPrueba);
    console.log(PruebaLevel);
    let currentPrueba2 = PruebaLevel.max;
    console.log(currentPrueba2);
})();
