//https://www.codeeval.com/open_challenges/156/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !=="") {
        var i,
            isUpper = false,
            reg = /[a-z]/i,
            o = '';

            for(i=0;i<line.length;i+=1) {
                var item = line[i];

                if(reg.test(item)) {
                    if(isUpper) {
                        o+=item.toLowerCase();
                        isUpper = false;
                    } else {
                        o+=item.toUpperCase();
                        isUpper = true;
                    }
                } else {
                    o+=item;
                }
            }
        console.log(o);
    }
});
