//https://www.codeeval.com/open_challenges/3/

var isPrime = function(num) {
  var i = 2;

  for(i; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
};

var isPalindrome = function(n) {
  n = n.toString();
  return (n) === (n).split('').reverse().join('');
};

var getLargestPrime = function(max, i) {
  while(i < max) {
    if(isPrime(i) && isPalindrome(i)) {
      largestPrime = i;
    }
    i++;
    return getLargestPrime(max, i);
  }

  return largestPrime;
};

console.log(getLargestPrime(1000, 1));
