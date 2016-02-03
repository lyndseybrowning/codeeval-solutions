// https://www.codeeval.com/open_challenges/23/

var getSpaces = function(n) {
  return (' ').repeat(4 - n.toString().length);
};

var multiplications = function(max, multiplies, divisor) {
  divisor = divisor || 1;

  if(divisor > max) {
    return multiplies.join('\n');
  }

  var i = 1,
      multiply,
      multiplyArray = [];

  while(i <= max) {
    multiply = divisor * i;
    multiplyArray.push((getSpaces(multiply)) + (multiply));
    i++;
  }

  multiplies.push(multiplyArray.join(''));

  return multiplications(max, multiplies, ++divisor);
};

console.log(multiplications(12, []));
