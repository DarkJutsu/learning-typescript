/**
 * Clase Person que representa a una persona con sus propiedades y métodos.
 */
export class Person {
  name: string;
  age: number;
  isDev: boolean;

  /**
   * Constructor de la clase Person
   * @param name - Nombre de la persona
   * @param age - Edad de la persona
   * @param isDev - Indica si la persona es desarrollador
   */
  constructor(name: string, age: number, isDev: boolean) {
    this.name = name;
    this.age = age;
    this.isDev = isDev;
  }

  /**
   * Método greet que devuelve un saludo con el nombre y la edad de la persona
   * @return string
   */
  greet(): string {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}
