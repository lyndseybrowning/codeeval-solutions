//https://www.codeeval.com/open_challenges/14/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var permutations = [];
        permute(line, '');
        console.log(permutations.join(","));
    }

    function permute(str, prefix) {
        len = str.length,
        match = prefix + str;

        if(permutations.indexOf(match) === -1) {
            permutations.push(match);
        }

        if(len === 0)  {
            return permutations.sort();
        }

        for(var i = 0, l = str.length; i<l; i++) {
            var letter = str[i];
            permute(str.replace(letter, ''), prefix+letter);
        }
    }
});
