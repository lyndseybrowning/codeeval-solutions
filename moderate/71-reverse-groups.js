//https://www.codeeval.com/open_challenges/71/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var spl = line.split(";"),
            numbers = spl[0].split(","),
            times = parseInt(spl[1]);

        doIt(numbers, [], times);
    }
});

function doIt(strArray, arr, times) {

    var items = [];

    if(strArray.length < times) {
       console.log(arr.concat(strArray).join());
       return;
    }

    for(var i=0, l=strArray.length; i<l; i++) {
        items.push(strArray[i]);
        if(i === times-1) {
            items.reverse();
            arr = arr.concat(items);
            strArray.splice(0,times);
            doIt(strArray, arr, times);
        }
    }
   return;
}
