(() => {

  const batman: string = 'Batman';
  const linternaVerde: string = 'Linterna Verde';
  const robin: string = `Robin`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || 'No existe');

})()