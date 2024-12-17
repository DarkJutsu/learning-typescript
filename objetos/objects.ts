(() => {
  /* EL SIMBOLO ? ESTABLECE QUE UN PARA METRO ES OPCIONAL */
  let flash: { name: string; age?: number; powers: string[] } = {
    name: 'Barry allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
  };

  flash = {
    name: 'Clark Kent',
    /* age: 60, */
    powers: ['Super fuerza'],
    /* getNombre() {
      return this.name;
    }, */
  };

  console.log(flash);
})();
