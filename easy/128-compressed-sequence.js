//https://www.codeeval.com/open_challenges/128/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(' ');
        var current = '',
            counter = 0,
            output = [],
            num;

        for(var i = 0, l=line.length; i<l; i++) {
            num = line[i];
            current = num;
            counter+=1;
            if(line[i+1] !== current) {
                output.push(counter,current);
                counter=0;
            }
        }
        console.log(output.join(' '));
    }
});
