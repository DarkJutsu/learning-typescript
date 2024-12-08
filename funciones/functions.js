"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activeBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activeBatisignal);
    const heroName = returnName();
})();
