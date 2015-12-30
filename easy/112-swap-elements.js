//https://www.codeeval.com/open_challenges/112

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var sp = line.split(':'),
            nums = sp[0],
            swaps = sp[1].replace(/\s/g, ''),
            swap = function(n,x) {
                if(x.indexOf(',') !== -1) {
                    var spl = x.split(',');        
                    for(var i = 0, l = spl.length; i<l; i++) {
                        var s = spl[i];
                        n = swap(n,s);
                    }
                }  else {
                    x = x.split('-');
                    n = n.split(' ');

                    var num1 = x[0],
                        num2 = x[1],
                        swap1 = n[num1],
                        swap2 = n[num2];

                    n[num1]=swap2;
                    n[num2]=swap1;
                    n = n.join(' ');
                }
                return n;
            },
            o = swap(nums,swaps);
        console.log(o);
    }
});
