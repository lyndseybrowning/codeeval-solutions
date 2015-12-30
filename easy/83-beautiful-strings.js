//https://www.codeeval.com/open_challenges/83/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var i = line.length-1,
            letter,
            obj = {},
            reg = /[a-z]/,
            start = 26;

        for(i;i>=0;i--) {
            letter = line[i].toLowerCase();

            if(!reg.test(letter)) {
                continue;
            }

            if(obj.hasOwnProperty(letter)) {
                obj[letter]+=1;
            } else {
                obj[letter]=1;
            }
        }
        var arr = [];

        for(var x in obj) {
            var item = obj[x];
            arr.push(item);
        }

        arr = arr.sort(function(a,b) { return b-a; });

        var counter = 0;
        arr.forEach(function(value,index) {
            counter+= value*start;
            start--;
        });

        console.log(counter);
    }
});
