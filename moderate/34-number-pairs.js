//https://www.codeeval.com/open_challenges/34/

var fs  = require("fs"),
    current = "", sum = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	line = line.trim();

    	var items = line.split(';');

    	sum = Number(items[1]);

    	var ints = items[0].split(',').filter(function(value, index) { return value < sum });

    	checkSum(Number(ints[0]), ints, true);
		console.log(current === "" ? "NULL" : current.slice(1));
    }
});

function checkSum(curIndex, arr, isStart) {
	if(isStart) {
		current = "";
	}

	var newIndex = arr[1],
		arrLen = arr.length;

	if(arrLen < 2) {
		return current;
	}

	for(var i = 1; i<arrLen;i++) {
		if(Number(curIndex) + Number(arr[i]) === sum) {
			current+= ";" + curIndex + "," + arr[i];
		}
	}

	checkSum(newIndex, arr.splice(1, arr.length-1));
}
