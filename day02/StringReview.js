// int a;

let school = "Cydeo School";

console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school[0]);
console.log(school[school.length - 1]);

console.log("--------------------------------------");

school = school.toLowerCase(); // "cydeo school"

console.log(school);

school = school.toUpperCase();

console.log(school);


console.log("--------------------------------------");

let expectedResult = 'JavaScript';

let actualResult = 'JAVASCRIPT';

console.log(expectedResult === actualResult);

// ignore case sensitivity
console.log(  expectedResult.toLowerCase() === actualResult.toLowerCase());

console.log("--------------------------------------");

let words = "Python Python";

words = words.replace(/Python/g, 'JavaScript'); // g: global flag

console.log(words);


console.log("--------------------------------------");

let str = "abcdefg12345678hijkl123456mnop";

str = str.replace(/\d/g, '');

console.log(str);

console.log("--------------------------------------");

let email = "cydeoschool@gmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain);

console.log("--------------------------------------");

let employeeName = "Said";
let employeeSalary = 100_000;

console.log(`My name is ${employeeName}, and my salary is ${employeeSalary} US dollars.`);




