//https://www.codeeval.com/open_challenges/163/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var s1 = "-**----*--***--***---*---****--**--****--**---**--",
            s2 = "*--*--**-----*----*-*--*-*----*-------*-*--*-*--*-",
            s3 = "*--*---*---**---**--****-***--***----*---**---***-",
            s4 = "*--*---*--*-------*----*----*-*--*--*---*--*----*-",
            s5 = "-**---***-****-***-----*-***---**---*----**---**--",
            s6 = "--------------------------------------------------";

        var reg = /[0-9]/;
        var output = '',
            output2 = '',
            output3 = '',
            output4 = '',
            output5 = '',
            output6 = '';

        for(var i = 0, l = line.length; i<l; i++) {
            var item = line[i];
            if(reg.test(item)) {
                item = parseInt(item);
                output+= s1.slice((item*5),(item*5)+5);
                output2+=s2.slice((item*5),(item*5)+5);
                output3+=s3.slice((item*5),(item*5)+5);
                output4+=s4.slice((item*5),(item*5)+5);
                output5+=s5.slice((item*5),(item*5)+5);
                output6+=s6.slice((item*5),(item*5)+5);
            }
        }
        console.log(output + '\n ' + output2 + '\n ' + output3 + '\n ' + output4 + '\n ' + output5 + '\n ' + output6);
    }
});
