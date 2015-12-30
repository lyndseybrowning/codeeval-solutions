//https://www.codeeval.com/open_challenges/160/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var spl = line.split('.'),
        	decimal = spl[0],
        	fraction = spl[1],
        	t = convert('.'+fraction);
        	console.log(decimal + '.' + t);
    }

    function convert(x) {
		var minutes = leadZero(Math.floor(x*60)),
			seconds = leadZero(Math.floor((x*60*60)%60));

        return minutes + '\'' + seconds + '"';
    }

    function leadZero(x) {
    	return (x < 10) ? '0'+x : x;
    }
});
