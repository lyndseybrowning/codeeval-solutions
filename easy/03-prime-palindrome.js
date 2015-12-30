//https://www.codeeval.com/open_challenges/3/
var output = 1, largestPrime = '';

while(output < 1000) {
    if(isPrime(output)) {
        largestPrime = output;
    }
    output++;
}
console.log(largestPrime);

function isPrime(n) {
    var x;
    for(x=2;x<n;x++) {
        if(n % x === 0) {
            return false;
        }
    }
    if(n.toString() === n.toString().split('').reverse().join('')) {
        return true;
    }
    return false;
}
