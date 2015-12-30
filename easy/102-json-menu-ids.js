//https://www.codeeval.com/open_challenges/102/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
     if (line !== "") {
    	var obj = JSON.parse(line),
    		data = obj.menu.items,
    		sum = 0, item;
    	for(var i in data) {
    		item = data[i];
    		if(item !== null && item.hasOwnProperty("label")) {
    			sum+=parseInt(item.id);
    		}
    	}
    	console.log(sum);
    }
});
