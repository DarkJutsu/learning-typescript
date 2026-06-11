import { Persona } from './decorador';

/**
 * En este archivo se crea una instancia de la clase Persona,
 * que ha sido decorada con el decorador PersonaDecorator.
 * Se llama al método greet, que es un método definido en la
 * clase Persona, y al método dismiss, que ha sido agregado por el decorador.
 */
let userUno = new Persona('Josep', 22);

console.log(userUno.greet('Welcome'));
console.log(userUno.dismiss('Goodbye'));
