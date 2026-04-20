import { Animal } from './typeClasses';

/**
 * La clase Dog extiende de la clase Animal, lo que significa que hereda sus propiedades
 * y métodos. Además, la clase Dog tiene sus propias propiedades (name y bark) y un método adicional
 * (barking) que no está presente en la clase Animal. Esto permite que la
 * clase Dog tenga características específicas mientras sigue siendo un tipo de Animal.
 */
export class Dog extends Animal {
  public name: string;
  public bark: boolean;

  constructor(
    race: string,
    paws: number,
    fins: boolean,
    name: string,
    bark: boolean,
  ) {
    // Llamamos al constructor de la clase padre (Animal) para inicializar sus propiedades.
    super(race, paws, fins);
    this.name = name;
    this.bark = bark;
  }

  /**
   * Método que permite que el perro ladre si la propiedad bark es verdadera.
   * @returns Un mensaje indicando si el perro está ladrando o no.
   */
  public barking(): string {
    if (this.bark) return `The ${this.name} is barking`;
    else return `The ${this.name} isn't barking`;
  }
}
