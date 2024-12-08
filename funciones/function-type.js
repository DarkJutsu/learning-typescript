"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El munod esta salvado!!!`;
    let myFunction;
    let myFunction2;
    let myFunction3;
    myFunction = addNumber;
    console.log(myFunction(12, 3));
    myFunction2 = greet;
    console.log(myFunction2('Juan'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
