let persona: [string, number, boolean];
persona = ['Bryan', 21, true];

console.log('Personas: ', persona);

let personasT: [string, number, boolean][] = [];
personasT.push(['Angel', 10, false]);
personasT.push(['Ivan', 25, false]);
personasT.push(['Ester', 29, true]);

personasT.forEach((persona) => {
  console.log('Persona: ', persona);
  let nombre: string = persona[0];
  let edad: number = persona[1];
  let esDesarrollador: boolean = persona[2];

  console.log('Nombre: ', nombre);
  console.log('Edad: ', edad);
  console.log('Desarrollador: ', esDesarrollador);
});
