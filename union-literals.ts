type Combinable = number;
type ConversionDescriptor = 'as-number' | 'as-text'; //for union type that is literal as well

function combine (input1: number | string, input2: number | string, resultConversion: ConversionDescriptor) { 
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result

  //other option to make the calculation work 
  // if(resultConversion === 'string') {
  //   return +result
  // }else {
  //   return result.toString();
  // }
}

const combinedAges = combine(15, 33, 'as-number');
console.log(combinedAges); 

const combinedStringAges = combine(23, 33, 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Ben', 'Charlie', 'as-text');
console.log(combinedNames); 