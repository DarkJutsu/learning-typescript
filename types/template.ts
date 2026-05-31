/**
 * Template Literal Types es una característica de TypeScript que permite crear tipos de cadena basados en plantillas literales.
 * Esto es útil para definir tipos que siguen un formato específico o para generar tipos dinámicamente a partir de otros tipos.
 * En el ejemplo anterior, se define un tipo Sizes que representa los tamaños disponibles (small, medium, large).
 * Luego, se utiliza un template literal type para crear el tipo ClassCSS, que concatena la cadena 'btn-' con cada uno de los valores de Sizes.
 * Esto significa que ClassCSS puede ser 'btn-small', 'btn-medium' o 'btn-large'.
 * Luego, se crean variables btnSmall, btnMedium y btnLarge que son del tipo ClassCSS y se les asignan los valores correspondientes.
 * Además, se define un tipo genérico IsNumber que utiliza una condición para determinar si un tipo T es un número.
 * La función validateNumber toma un valor de tipo T y devuelve true si el valor es un número, o false en caso contrario.
 * Finalmente, se muestran ejemplos de uso de la función validateNumber con diferentes tipos de valores.
 */
type Sizes = 'small' | 'medium' | 'large';
type ClassCSS = `btn-${Sizes}`;

let btnSmall: ClassCSS = 'btn-small';
let btnMedium: ClassCSS = 'btn-medium';
let btnLarge: ClassCSS = 'btn-large';

// El tipo IsNumber<T> utiliza una condición para determinar si el tipo T es un número. Si T es un número, el tipo resultante será true; de lo contrario, será false.
type IsNumber<T> = T extends number ? true : false;

/**
 * La función validateNumber utiliza el operador typeof para verificar si el valor proporcionado es de tipo 'number'.
 * El resultado de esta verificación se convierte a IsNumber<T> utilizando una aserción de tipo (as IsNumber<T>).
 * Esto permite que la función devuelva un valor booleano que indica si el valor es un número o no, y al mismo tiempo se ajusta al tipo IsNumber<T>.
 */
function validateNumber<T>(valor: T): IsNumber<T> {
  return (typeof valor === 'number') as IsNumber<T>;
}

const num = validateNumber(23);
const jose = validateNumber('Josep');

console.log(num);
console.log(jose);
