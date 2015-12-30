//https://www.codeeval.com/open_challenges/92/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
      line = line.split(' ');
      console.log(line[line.length-2]);
  }
});
