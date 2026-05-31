/**
 * Mapped Types es una forma de crear nuevos tipos a partir de otros tipos existentes, aplicando una transformación a cada propiedad del tipo original.
 * Esto se logra utilizando la sintaxis de los tipos genéricos y la iteración sobre las propiedades del tipo original mediante el operador keyof.
 * En el ejemplo anterior, se definen dos tipos genéricos: MyPartial y OnlyRead.
 * MyPartial toma un tipo T y crea un nuevo tipo donde todas las propiedades de T son opcionales (usando el operador ?).
 * OnlyRead toma un tipo T y crea un nuevo tipo donde todas las propiedades de T son de solo lectura (usando el modificador readonly).
 * Luego, se crean dos nuevos tipos: MyWorker, que es una versión parcial de PersonType,
 * y Police, que es una versión de solo lectura de PersonType.
 * Finalmente, se crea una instancia de Police y se imprime su propiedad name.
 */
type PersonType = {
  name: string;
  age: number;
};

type MyPartial<T> = {
  // El operador ? hace que las propiedades del tipo sean opcionales, lo que significa que no es necesario proporcionar un valor para esas propiedades al crear un objeto de ese tipo.
  [K in keyof T]?: T[K];
};

type OnlyRead<T> = {
  // El modificador readonly hace que las propiedades del tipo sean de solo lectura, lo que significa que no se pueden modificar después de su inicialización.
  readonly [K in keyof T]: T[K];
};

type MyWorker = MyPartial<PersonType>;
type Police = OnlyRead<PersonType>;

let police: Police = {
  name: 'Juan',
  age: 23,
};

console.log(police.name);
