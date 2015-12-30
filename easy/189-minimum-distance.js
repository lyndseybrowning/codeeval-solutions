//https://www.codeeval.com/open_challenges/189/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var spl = line.split(" "),
            numFriends = parseInt(spl[0]),
            median,
            evens = numFriends/2,
            sum = 0;

        spl.splice(0,1);
        spl = sortArr(spl);

        if(evens === 0) {
            median = Math.ceil((parseInt(spl[evens-1]) + parseInt(spl[evens]))/2);
        }
        else {
            median = parseInt(spl[Math.ceil(evens)-1]);
        }

        for(var i = 0; i<numFriends; i++) {
            var number = parseInt(spl[i]);
            sum+=Math.abs(median-number);
        }
        console.log(sum);
    }
});

function sortArr(arr) {
    return arr.sort(function(a,b) { return a-b; });
}
