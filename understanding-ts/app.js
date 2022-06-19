function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'asNumber') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' & ' + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'asNumber');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'asNumber');
console.log(combinedStringAges);
var combinedNames = combine('Leandro', 'Chelem', 'asText');
console.log(combinedNames);
