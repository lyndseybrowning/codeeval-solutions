//https://www.codeeval.com/open_challenges/4/
function isPrime(n) {
    var x = 2;
    for(x;x<n;x++) {
        if(n % x === 0) {
            return false;
        }
    }
    return true;
}

var count = 0, i = 0, total = -1;

while(count < 1001) {
    i++;
    if(isPrime(i)) {
        count++;
        total+=i;
    }
}
console.log(total);
