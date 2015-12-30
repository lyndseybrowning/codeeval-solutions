//https://www.codeeval.com/open_challenges/147/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var l = line.length,
        reg = /[a-z]/g,
        matches = (line.match(reg)) ? line.match(reg).length : 0,
        ratiol = ((matches/l)*100).toFixed(2);
        ratiou = (((l-matches)/l)*100).toFixed(2);

        console.log('lowercase: ' + ratiol + ' uppercase: ' + ratiou);
    }
});
