// undefined vs void types in functions

function add (n1:number, n2: number) {
  return n1 + n2;
} 

function printResult(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 = n2;
}


 printResult(add(11, 22));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult;
// combinedValues =5; this would give an error as  this is not a function, cannot redeclare it.

console.log(combinedValues(33, 55));

addAndHandle(55, 67, (result) => {
  console.log(result);
});