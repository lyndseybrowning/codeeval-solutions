//https://www.codeeval.com/open_challenges/166/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var spl = line.split(' '),
            t1 = timeObj(spl[0]),
            t2 = timeObj(spl[1]),
            output = convert((t1>t2) ? (t1-t2) : (t2-t1));

        console.log(output);
    }

    function timeObj(x) {
        x = x.split(':');
        var hours, minutes, seconds;
        for(var i = 0, l = x.length; i<l; i++) {
            hours = x[0];
            minutes = x[1];
            seconds = x[2];
        }
        var d = new Date('', '', '', hours, minutes, seconds, '');
        return d;
    }

    function convert(x) {
        var seconds = Math.floor(((x/1000)%60)).toFixed(0);
        var minutes = Math.floor(((x/(1000*60))%60)).toFixed(0);
        var hours = Math.floor(((x/(1000*60*60)) % 24)).toFixed(0);
        return leadzero(hours) + ':' + leadzero(minutes) + ':' + leadzero(seconds);
    }

    function leadzero(x) {
        return (x<10) ? '0'+x : x;
    }
});
