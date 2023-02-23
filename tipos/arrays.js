"use strict";
(() => {
    // ARAYS
    const number = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    number.push('16');
    console.log(number);
    const numbers2 = [1, 2, 3, 4, 5, 6];
    numbers2.push(66);
    console.log(numbers2);
    const villian = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villian.forEach(v => console.log(v.toUpperCase()));
    numbers2.map(value => {
        console.log(value);
    });
})();
