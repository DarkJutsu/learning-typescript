// Funcion con parametros opcionales. Se especifican con ?
function greeting(name: string, greet?: string): string {
  if (greet) return `${greet}, ${name}!`;
  else return `Hola, ${name}!`;
}

console.log(greeting('Samuel'));
console.log(greeting('Josep', 'Bienvenido'));

// Funcion con parametros multiples
function allSum(...num: number[]): number {
  return num.reduce((count, now) => count + now, 0);
}

console.log('La suma total es: ', allSum(12, 7, 8, 3, 4));

// Funcion con parametros por defecto
function dismiss(name: string, greet: string = 'Adios!'): string {
  return `${greet}, ${name}`;
}

console.log(dismiss('Pedro'));
console.log(dismiss('Juan', 'Bya!'));
