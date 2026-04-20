function identity<T>(arg: T): T {
  return arg;
}

let generictString = identity<string>('Hi from the generict function');
let generictNumber = identity<number>(2 + 2);

console.log('Output1: ', generictString);
console.log('Output2: ', generictNumber);
