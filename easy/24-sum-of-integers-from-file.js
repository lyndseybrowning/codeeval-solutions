// https://www.codeeval.com/open_challenges/24/

var fs  = require('fs');
var integers = fs.readFileSync('test.txt').toString().split('\n');
var totalSum = integers.filter(Boolean).reduce(function(prev, current) {
  return parseInt(prev, 10) + parseInt(current, 10);
});

console.log(totalSum);
