//https://www.codeeval.com/open_challenges/122
var fs  = require("fs"),
    alphabet = 'abcdefghij';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var output = '',
            item,
            index,
            i = 0,
            len = line.length;

        for(i;i<len;i++) {
            item = line[i];
            index = alphabet.indexOf(item);
            if(index !== -1) {
                output+=index;
            } else if( !isNaN(item) ) {
                output+=item;
            }
        }
        console.log((output==='') ? 'NONE' : output);
    }
});
