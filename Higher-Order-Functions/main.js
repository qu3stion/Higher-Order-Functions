//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds

const numbers = [11, 5, 72, 1107, 90, 336]

const evenNumbers = numbers.filter(value => value % 2 === 0);
  console.log(evenNumbers);

const oddNumbers = numbers.filter(value => value % 2 > 0);
  console.log(oddNumbers)

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const nums = [48, 120, 33, 45, 1, 966]

const divisibleBySix = nums.filter(value => value % 6 === 0);
  console.log(divisibleBySix)


//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

const numerals = [22, 313, 97, 4, 15, 39]

function numeralsSum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
}


console.log(numeralsSum(numerals));




//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

let arrayMlt = [1, 2, 3, 4, 5]
function returnMultiple(arr) {
  return arr.reduce(function (a, b) {
    return a * b;
  }, 1);
}

console.log(returnMultiple(arrayMlt))




//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function squared(arr) {
  const square = arr.reduce((accumulator, currValue) => {
    return accumulator**currValue;
  })
  return square
}
console.log(squared([4, 9, 11]))

//Exercise #6
//using the .filter(), filter out the Full Stack residents

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];



//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
[{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]
