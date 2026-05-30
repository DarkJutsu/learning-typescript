let myName: string = 'Samuel';
console.log('Metodo length nativo: ', myName.length);

function getLenght<T extends { length: number }>(obj: T): number {
  let length: number = obj.length;
  let type: string = typeof obj;
  console.log(`The type is ${type} and length is ${length}`);
  return obj.length;
}
console.log('Funcion length: ', getLenght('Josep'));
console.log('Funcion length: ', getLenght([1, 3, 4, 2, 87, 4, 1, 1]));
