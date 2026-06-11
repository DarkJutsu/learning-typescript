/**
 * Using fetch with TypeScript
 */
type dataItem = {
  name: string;
  language: string;
  bio: string;
  version: number;
};

const fetchData = async () => {
  const API_URL =
    'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'; // API URL que devuelve un array de objetos con las propiedades name, language, bio y version
  const res = await fetch(API_URL); // Realiza la petición a la API
  const data: dataItem[] = await res.json(); // Convierte la respuesta a JSON y la asigna a la variable data, indicando que es un array de dataItem
  return data;
};

let btnGetInfo: HTMLButtonElement = document.querySelector(
  '.btnInfo',
) as HTMLButtonElement; // Selecciona el botón con la clase .btnInfo y lo asigna a la variable btnGetInfo, indicando que es un HTMLButtonElement
let pInfo: HTMLParagraphElement = document.querySelector(
  '.info',
) as HTMLParagraphElement; // Selecciona el párrafo con la clase .info y lo asigna a la variable pInfo, indicando que es un HTMLParagraphElement

// Agrega un event listener al botón btnGetInfo que se ejecuta al hacer click, llamando a la
// función fetchData y mostrando la información en el párrafo pInfo
btnGetInfo.addEventListener('click', async () => {
  const data = await fetchData();
  // Muestra la información en el párrafo pInfo, creando un span para cada item del array data,
  // mostrando el nombre en negrita, el lenguaje y la bio, y uniendo todos los spans con join('')
  pInfo.innerHTML = data
    .map(
      (item) =>
        `<span><b>${item.name}</b><span>${item.language}</span><span>${item.bio}</span></span>`,
    )
    .join('');
});
