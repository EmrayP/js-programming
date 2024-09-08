
/*
const allUtility = require('./Utility.js'); // imports everything

let result = allUtility.square(9);

console.log(result);

result = allUtility.cube(3);

console.log(result);

result = allUtility.calculate(10, 20, '+');

console.log(result);

*/

const {calculate, square} = require('./Utility.js'); // imports calculate function ONLY


let result = calculate(10, 20, '*');

console.log(result);

result = square(10);

console.log(result);