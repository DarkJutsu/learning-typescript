"use strict";
(() => {
    const a = 10;
    let b = 10;
    var array1 = ['hola', 'como', 'estas'];
    let array2 = ['hola', 'como', 'estas'];
    let array3 = [1, 2, 3, 4, 5, 6, 7];
    let vacio = null;
    let Enumeracion;
    (function (Enumeracion) {
        Enumeracion[Enumeracion["a"] = 10] = "a";
        Enumeracion[Enumeracion["b"] = 11] = "b";
        Enumeracion[Enumeracion["c"] = 9] = "c";
        Enumeracion[Enumeracion["d"] = 10] = "d";
    })(Enumeracion || (Enumeracion = {}));
    array1.push('10');
    function saludo(msg) {
        console.log(msg);
    }
    console.log(Enumeracion.d);
})();
