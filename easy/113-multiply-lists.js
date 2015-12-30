//https://www.codeeval.com/open_challenges/113/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split('|');
        var first = line[0].split(' '),
            second = line[1].split(' '),
            output = '';

        for(var i = 0, strLen = second.length; i<strLen; i++) {
            var fitem = first[i],
                sitem = second[i+1];
            if(fitem!== '' && sitem !=='') {
                var space = (i<strLen) ? ' ' : '';
                output+= parseInt(fitem)*parseInt(sitem) + space;
            }
        }
        console.log(output);
    }
});
