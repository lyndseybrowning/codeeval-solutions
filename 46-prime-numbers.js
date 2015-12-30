//https://www.codeeval.com/open_challenges/46/
function isPrime(n) {
	for(var i = 2; i<n; i++) {
	    if(n % i === 0) {
	        return false;
	    }
	}
	return true;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var primes = "",
    		i = 2;
    		x = Number(line);

    	while(i < x) {
    		if(isPrime(i)) {
    			primes+= ',' + i;
    		}
    		i++;
    	}
    	console.log(primes.substr(1));
    }
});
