"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Guazon', 'El Pinguino', 'Duende Verde'];
    numbers.push(11);
    villians.forEach((v) => console.log(v.toUpperCase()));
    console.log(numbers);
})();
