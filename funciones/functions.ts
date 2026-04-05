(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activeBatisignal = (): string => {
    return 'Batiseñal activada!';
  };

  console.log(typeof activeBatisignal);

  const heroName = returnName();
})();
