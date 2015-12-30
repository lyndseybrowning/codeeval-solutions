//https://www.codeeval.com/open_challenges/12/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  line = line.trim();

  if (line !== "") {
        for(var i = 0, l = line.length; i<l; i++) {
            var letter = line[i];
            if(line.replace(letter, '').indexOf(letter) === -1) {
                console.log(letter);
                break;
            }

        }
    }
});
