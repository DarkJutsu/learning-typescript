(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = () => `El munod esta salvado!!!`;

  let myFunction: (a: number, b: number) => number;
  let myFunction2: (a: string) => string;
  let myFunction3: () => string;

  myFunction = addNumber;
  console.log(myFunction(12, 3));

  myFunction2 = greet;
  console.log(myFunction2('Juan'));

  myFunction3 = saveTheWorld;
  console.log(myFunction3());
})();
