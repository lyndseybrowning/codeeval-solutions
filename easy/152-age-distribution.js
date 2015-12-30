//https://www.codeeval.com/open_challenges/152/

function o(n) {
    if (n > -1 && n < 3) {
        return "Still in Mama's arms";
    } else if (n > 2 && n < 5) {
        return "Preschool Maniac";
    } else if (n > 4 && n < 12) {
        return "Elementary school";
    } else if (n > 11 && n < 15) {
        return "Middle school";
    } else if (n > 14 && n < 19) {
        return "High school";
    } else if (n > 18 && n < 23) {
        return "College";
    } else if (n > 22 && n < 66) {
        return "Working for the man";
    } else if (n > 65 && n < 101) {
       return "The Golden Years";
    } else {
       return "This program is for humans";
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (n) {
    if (n !== "") {
        console.log(o(n));
    }
});
