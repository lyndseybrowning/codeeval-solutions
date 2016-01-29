//https://www.codeeval.com/open_challenges/4/

'use strict';

const isPrime = (n) => {
    for (let x = 2; x < n; x++) {
        if (n % x === 0) {
            return false;
        }
    }
    return true;
};

let count = 0,
    i = 0,
    total = -1;

while (count <= 1000) {
    i++;

    if (isPrime(i)) {
        count++;
        total += i;
    }
}

console.log(total); // 3682913
