//https://www.codeeval.com/open_challenges/4/

var sumOfPrimes = function(maxPrimes, numPrimes, sum, iterator) {

  while(numPrimes <= maxPrimes) {
    if(isPrime(iterator)) {
      sum += iterator;
      numPrimes++;
    }
    iterator++;
  }
  return sum - 1;
};

var isPrime = function(num) {
  var i = 2;

  for(i; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(sumOfPrimes(1000, 0, 0, 1)); // 3682913
