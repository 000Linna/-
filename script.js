let value = true;
// проверка типов
console.log(typeof (value));
// string строковое преобразование
value = String(value);
console.log(typeof (value));

// численное преобразование
let a = "3";
let b = "10";
console.log(typeof (a))
a = Number(a)
console.log(typeof (a))
// преобразование строки в целое число
a = "12 штук";
a = parseInt(a)
console.log(a + 10)
//   преобразование строки число с плавующей точкой
a = "12,5 кг";
a = parseFloat(a)
console.log(a)
// логическое преобразование 
let x = 1;
let y = 0;

x = Boolean(x)
y = Boolean(y)
console.log(`x = ${x}`)
console.log(`y = ${y}`)

// alert("hello")
// let result = prompt("how old are you", 14);
// console.log(result);
// let boss = confirm("ты здесь главный")
// console.log(istboss)
let nam1;
nam1 = +prompt('выведете первое число');
console.log(nam1)

// // дз 2
// let str = "10";
// let str2 = "20.5";
// let str3 = "30.25px";
// console.log(parseInt(str2));
// console.log(Number(str));
// console.log(parseFloat(str3));