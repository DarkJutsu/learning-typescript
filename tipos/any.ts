(() => {
  let avenger: any = 123;
  let exists = 'sdsds';
  let power;

  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0));

  avenger = 150.9838367;
  console.log(<number>avenger.toFixed(2));
})();
