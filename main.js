"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avangersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const iroman = avangersArr[1];
    const pruebaAvenger = ['Tony Stark', true, 166686];
    const [nombre, verdad, numero] = pruebaAvenger;
    const avengerssArrs = ['Hulk', true, 6];
    const [capi, iro, capitan] = avengerssArrs;
})();
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Down Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.486948
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, num = __rest(_a, ["ironman"]);
        console.log(`${ironman}, su poder es: ${num.poder}, ${num.nick}`);
    };
    printAvenger(avengers);
})();
(() => {
    const iroman = {
        name: 'Iroman',
        weapon: 'Armorsuit'
    };
    const capitanAmerica = {
        name: 'Capitan América',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [iroman, capitanAmerica, thor];
    for (const avenger of avengers) {
    }
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map