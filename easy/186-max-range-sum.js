//https://www.codeeval.com/open_challenges/186/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var item = line.split(";"),
    		numDays = item[0],
    		figures = item[1].split(" "),
    		i = 0,
    		biggestGain = 0,
    		temp = 0;

    	while(i < figures.length-(numDays-1)) {
    	   temp = checkAt(i);
    	   if(temp > biggestGain) {
    	       biggestGain = temp;
    	   }
    	   i++;
    	}
    	console.log(biggestGain);
    }

    function checkAt(index) {
    	var total = 0, i;
    	for(i = index; i < parseInt(numDays)+index; i++) {
    		total+= parseInt(figures[i]);
    	}
    	return total;
    }
});
