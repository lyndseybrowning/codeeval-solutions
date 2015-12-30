//https://www.codeeval.com/open_challenges/99/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(') (');
        var coords1 = line[0].replace(/[(\s]/g, '').split(','),
            coords2 = line[1].replace(/[)\s]/g, '').split(','),
            x1 = coords2[0]-coords1[0],
            x2 = coords2[1]-coords1[1],
            sumx = x1*x1,
            sumy = x2*x2,
            sumtotal = sumx+sumy,
            distance = Math.sqrt(sumtotal);

        console.log(distance);
    }
});
