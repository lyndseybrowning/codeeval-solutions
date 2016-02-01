//https://www.codeeval.com/open_challenges/2/

var fs = require('fs'),
    maxLines = 0,
    allLinesArray = [],
    maxLinesArray = [];

fs.readFileSync('test.txt').toString().split('\n').forEach(function (line, index) {
    if (line !== '') {

       if(index === 0) {
         maxLines = line;
       } else {
         if(!allLinesArray.length || line.length < allLinesArray[0].length) {
           allLinesArray.push(line);
         } else {
           allLinesArray.unshift(line);
         }
       }
    }
});

maxLinesArray = allLinesArray.filter(function(line, index) {
  return index < maxLines;
});

console.log(maxLinesArray.join('\n'));
