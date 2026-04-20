import { Dog } from './Dog';
import { Animal } from './typeClasses';

let dog = new Dog('Dog', 4, false, 'Buddy', true);
let fish = new Animal('Fish', 0, true);

console.log(dog.walk());
console.log(fish.walk());
console.log(dog.barking());
