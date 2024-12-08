"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isBatman = (isSuperman) ? true : false;
    console.log({ isSuperman });
    console.log({ isBatman });
})();
