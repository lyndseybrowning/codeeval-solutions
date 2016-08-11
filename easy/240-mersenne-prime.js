// https://www.codeeval.com/open_challenges/240/

var mersennePrime = function(num) {
    return Math.pow(2, num) - 1;
};

var isPrime = function(num) {
    var i = 2;
      
    while(i < num) {
        if(num % i === 0) return false;  	
        i++;
    }
    return true;
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== '') {
        line = parseInt(line, 10);
        
        var num = 2, mersenne, results = [];

        while(num < line) {
            mersenne = mersennePrime(num);
            
            if(mersenne > line) break;
            
            if(isPrime(num)) {
              results.push(mersenne);
            }     
            num++;
         }
    
        console.log(results.join(', '));
    }
});
