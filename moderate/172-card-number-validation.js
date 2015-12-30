//https://www.codeeval.com/open_challenges/172/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
     if (line !== "") {
        line = line.replace(/[ ]/g, "").trim();

        var len = line.length-1,
        	sum = 0,
        	counter = 0;

        for(var i = len; i>=0; i--) {
        	var num = +line[i];
        	counter++;

        	if(counter % 2 === 0) {
        		var doub = num*2;

          		if(doub > 9) {
        			doub = doub.toString();
        			sum+= Number(doub[0]) + Number(doub[1]);
        		} else {
        			sum+=doub;
        		}
        	} else {
        		sum+=num;
        	}
        }
        console.log(sum % 10 === 0 ? 1 : 0);
    }
});
