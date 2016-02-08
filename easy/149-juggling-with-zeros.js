// https://www.codeeval.com/open_challenges/149/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== '') {
  
	  var getArray = function(str) {
		return str.split(' ');
	  };
	  
	  var binaryStr = function(str) {
		var i = 0,
				len = str.length,
			element,
			nextElement,
			sequence = [];
			 
		for(i; i<len; i+=2) {
			element = str[i];
		  nextElement = str[i + 1];
		  
		  switch(element) {
			case '00':      	
			  sequence.push(nextElement.replace(/0/g, 1));
			  break;
			case '0':
			  sequence.push(nextElement);
			  break;       
		  }  	      
		}
		
		return sequence.join('');
	  };
	  
	  var binaryToDecimal = function(binary) {
		return parseInt(binary, 2);
	  };
	  
	  console.log(binaryToDecimal(binaryStr(getArray(line))));
	}
});
