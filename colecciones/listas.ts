let nombres: string[] = ['Juan', 'Pedro', 'Enoc', 'José'];
let edades: number[] = [29, 30, 22, 33];
let nombresEdades: any[] = ['Julia', 20, 'Karen', 25];

const personas: Persona[] = [
  { nombre: 'Samuel', edad: 28, isDev: true },
  { nombre: 'Carlos', edad: 22, isDev: false },
  { nombre: 'Luis', edad: 38, isDev: true },
];

console.log('Nombres: ', nombres);
console.log('Edades: ', edades);
console.log('Nombres y Edades: ', nombresEdades);
console.log('Personas: ', personas);
personas.push({ nombre: 'Sara', edad: 12, isDev: false });
console.log('Personas: ', personas);
