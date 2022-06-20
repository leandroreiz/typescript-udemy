type Combinable = number | string;
type ConversionType = 'asNumber' | 'asText';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionType
) {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'asNumber'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ' & ' + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, 'asNumber');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'asNumber');
console.log(combinedStringAges);

const combinedNames = combine('Leandro', 'Chelem', 'asText');
console.log(combinedNames);
