// https://www.codeeval.com/open_challenges/63/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
   if (line !== '') {

     var getArray = function(str, index) {
       return str.split(',').map(function(item) {
         return parseInt(item, 10);
       })[index];
     };

     var isPrime = function(n) {
       var i = 2;
       while(i < n) {
         if(n % i === 0) {
             return false;
         }
         i++;
       }
       return true;
     };

     var countPrimes = function(min, max) {
       var numPrimes = 0;

       while(min <= max) {
         if(isPrime(min)) {
           numPrimes++;
         }
         min++;
       }
       return numPrimes;
     };

     console.log(countPrimes(getArray(line, 0), getArray(line, 1)));
    }
});
