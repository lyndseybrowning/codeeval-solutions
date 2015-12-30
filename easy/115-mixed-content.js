//https://www.codeeval.com/open_challenges/115/

var fs  = require("fs"),
    pattern = /[a-z]/i;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
       line = line.split(',');
       var  arrWords = [],
            arrNumbers = [],
            item;

        for(var i = 0, strlen = line.length; i<strlen; i++) {
            item = line[i];
            if(pattern.test(item)) {
               arrWords.push(item);
               words = 1;
            } else {
               arrNumbers.push(item);
               nums = 1;
            }
        }
        var l = (arrWords.length && arrNumbers.length) ? '|' : '';
        console.log(arrWords.join(',') + l + arrNumbers.join(','));
    }
});
