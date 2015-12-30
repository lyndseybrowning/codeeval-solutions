//https://www.codeeval.com/open_challenges/97/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
       var spl = line.split('|'),
        str = spl[0],
        cipher = spl[1].split(' '),
        i,
        o='';

        for(i=1;i<cipher.length;i+=1) {
            var item = cipher[i]-1;
            o+=str[item];
        }
        console.log(o);
    }
});
