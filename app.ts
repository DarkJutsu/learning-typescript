(() => {
  const a: number = 10;
  let b: number = 10;

  var array1: string[] = ['hola', 'como', 'estas'];
  let array2: string[] = ['hola', 'como', 'estas'];
  let array3: any = [1, 2, 3, 4, 5, 6, 7];

  let vacio: null = null;

  enum Enumeracion {
    a = 10,
    b,
    c = 9,
    d,
  }

  array1.push('10');

  function saludo(msg: string) {
    console.log(msg);
  }
  console.log(Enumeracion.d);
})();
