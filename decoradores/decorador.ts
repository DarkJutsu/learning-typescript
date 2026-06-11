/**
 * Decoradores en TypeScript
 * - Un decorador es una función que se aplica a una clase, método,
 * propiedad o parámetro para modificar su comportamiento.
 * - Se pueden usar para agregar funcionalidades adicionales a las
 * clases sin modificar su código original.
 * - En este ejemplo, el decorador PersonaDecorator agrega un método
 * dismiss a la clase Persona.
 */
function PersonaDecorator(target: Function) {
  console.log(target);
  // Agregamos el método dismiss al prototipo de la clase decorada
  target.prototype.dismiss = function (dismiss: string) {
    return `${dismiss}, ${this.name}`;
  };
}

/**
 * La clase Persona es decorada con el decorador PersonaDecorator,
 * lo que le permite tener el método dismiss sin haberlo definido
 * explícitamente en la clase.
 */
@PersonaDecorator // Aplicamos el decorador a la clase Persona
export class Persona {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(message: string): string {
    return `${message}, my name is ${this.name} and I am ${this.age} years old`;
  }

  // El método dismiss es agregado por el decorador, por lo que se declara como una propiedad de tipo función sin implementación aquí.
  dismiss!: (dismiss: string) => string;
}
