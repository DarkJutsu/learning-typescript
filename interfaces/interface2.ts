// Propiedades opcionales
interface Direction {
  street: string;
  number: number;
  city?: string;
}
let direction: Direction = {
  street: '4Av Oriente',
  number: 556,
  city: 'Santa Ana',
};

console.log('Direction: ', direction);

// Propiedades read-only
interface Automobil {
  readonly brand: string;
  readonly chassis: number;
  readonly wheels: number;
  readonly terrestrial: boolean;
}

let car: Automobil = {
  brand: 'Mazda',
  chassis: 886262,
  wheels: 4,
  terrestrial: true,
};

console.log('Car: ', car);

// car.brand = 'Toyota';

console.log('Car: ', car);

// Interfaces extendidas
interface Truck extends Automobil {
  readonly burden: number;
}

let truck1: Truck = {
  brand: 'Volvo',
  chassis: 121212,
  wheels: 10,
  terrestrial: true,
  burden: 300,
};

console.log('Truck: ', truck1);
