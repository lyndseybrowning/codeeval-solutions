//https://www.codeeval.com/open_challenges/87/
var rows = [],
    cols,
    i = 0,
    len = 256,
    fs;

for(i; i<len; i++) {
    rows[i] = new Array(len);
}

function set(num, val, x) {
    var max = len;

    while(max--) {
        if(x === "row") {
        	rows[num][max] = val;
        } else {
            rows[max][num] = val;
        }
    }
    return rows;
}

function queryItem(num, x) {
    var total = 0,
        i = 0,
        pos;

    for(i; i<len; i++) {
        pos = (x === "row") ? rows[num][i] : rows[i][num];
        total += (typeof pos === "number") ? Number(pos) : 0;
    }
    return total;
}

fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(" ");

        var query = line[0];

        switch(query) {
            case "SetCol":
               	set(line[1], Number(line[2]), "col");
                break;
            case "SetRow":
                set(line[1], Number(line[2]), "row");
                break;
            case "QueryCol":
                console.log(queryItem(line[1], "col"));
                break;
            case "QueryRow":
                console.log(queryItem(line[1], "row"));
                break;
        }
    }
});
