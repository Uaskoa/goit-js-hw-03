const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

// console.log(products);
const getAllPropValues = function (arr, prop) {
  let array = [];

  for (const product of arr) {
    if (product[prop]) {
      array.push(product[prop]);
    }
  }
  return array;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов
// и имя свойства.Возвращает массивзначений определенного свойства prop из
// каждого объекта в массиве.
