const h1 = document.querySelector('h1');
console.log(h1?.textContent);

let title: HTMLHeadElement = document.querySelector(
  '.title',
) as HTMLHeadElement;
console.log(title?.textContent);

let placeholderMsg: HTMLInputElement = document.querySelector(
  '#id_msg',
) as HTMLInputElement;

console.log(placeholderMsg?.placeholder);
