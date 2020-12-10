
// const findBestEmployee = function(employees) {
//   const employeesTasks = Object.values(employees);
//   console.log(Object.values(employees));
//   let bestEmployee = employeesTasks[0];
//   console.log(bestEmployee);

//   for (const task of employeesTasks) {
//     if (task > bestEmployee) { 
//       bestEmployee = task;
//     }
//   }
//   return bestEmployee;
// };


// const findBestEmployee = function (employees) {
//   const employeesTasks = Object.keys(employees);
//   console.log(Object.keys(employees));
//   let bestEmployee = employeesTasks[0];
//   console.log(bestEmployee);

//   for (const task of employeesTasks) {
//     if (task > bestEmployee) {
//       bestEmployee = task;
//     }
//   }
//   return bestEmployee;
// };


// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux




// Напиши функцию findBestEmployee(employees), которая принимает объект
// сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач).Сотрудники и кол - во выполненых задач
// содержатся как свойства объекта в формате "имя": "кол-во задач".