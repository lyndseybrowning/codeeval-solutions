//https://www.codeeval.com/open_challenges/173/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var i, cur = '', o = '';

        for(i=0;i<line.length;i+=1) {
            var item = line[i];
            if(item !== cur) {
                o+=item;
                cur=item;
            }
        }
        console.log(o);
    }
});
