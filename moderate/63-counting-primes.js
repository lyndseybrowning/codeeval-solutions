//https://www.codeeval.com/open_challenges/63/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
   if (line !== "") {
        var numPrimes = 0,
            spl = line.split(","),
            n = parseInt(spl[0]),
            m = parseInt(spl[1]);

        while(n <= m) {
            if(isPrime(n)) {
                numPrimes+=1;
            }
            n++;
        }
        console.log(numPrimes);
    }
});

function isPrime(num) {
    for(var i = 2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
