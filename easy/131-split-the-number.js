//https://www.codeeval.com/open_challenges/131/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {

		line = line.split(' ');
	    var y = line[0],
	        z = line[1],
	        i,
	        pattern = /[+-/]/,
	        match = false,
	        num1 = '', num2 = '', operand = '';

	    for(i=0;i<z.length-1;i++) {
	        var numbers = y[i],
	            str = z[i];
	        if(pattern.test(str)) {
	            operand = str;
	            match=true;
	        }
	        if(!match) {
	            num1+=numbers;
	        } else {
	            num2+=numbers;
	        }
	    }
	    console.log((operand === '+') ? (parseInt(num1)+parseInt(num2,10)) : (parseInt(num1)-parseInt(num2,10)));
	}
});
