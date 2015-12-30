//https://www.codeeval.com/open_challenges/211/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if(line !== "") {
        line = line.split("|");

        var wines = line[0],
            letters = line[1],
            output = [],
            hasLetters = function(wine, letters) {
                var i = 0, len = letters.length, index;

                for(i; i<len; i++) {
                    index = wine.indexOf(letters[i]);
                    if(index === -1) {
                       return false;
                    }
                    wine = wine.substring(0, index) + wine.substring(index+1);
                }
                return true;
            },
            checkWines = function(wines) {
                var i = 0,
                	len = wines.length,
                    wine;

                for(i; i<len; i++) {
                	wine = wines[i];
                    if(hasLetters(wine, letters)) {
                        output.push(wine);
                    }
                }
                return output;
            };

        wines = wines.trim().split(" ");
        letters = letters.trim();
        checkWines(wines);

        console.log(output.length ? output.join(" ") : "False");
    }
});
