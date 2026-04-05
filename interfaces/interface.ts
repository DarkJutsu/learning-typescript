interface Persona {
  nombre: string;
  edad: number;
  isDev: boolean;
}

let persona2: Persona = {
  nombre: 'Josep',
  edad: 28,
  isDev: true,
};

let personas2: Persona[] = [
  { nombre: 'Carlos', edad: 22, isDev: false },
  { nombre: 'Luis', edad: 32, isDev: true },
  { nombre: 'Saul', edad: 34, isDev: false },
];

console.log('Persona: ', persona2);
console.log('Personas: ', personas2);

// Interfaces con metodos
interface Sumar {
  (a: number, b: number): number;
}
let iSumar: Sumar = (a: number, b: number): number => a + b;

console.log('Suma: ', iSumar(12, 8));
