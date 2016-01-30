//https://www.codeeval.com/open_challenges/225/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if(line !== '') {
    line = line.split(' | ');

    var errors = 0;
    var getPriority = function(bugs) {
      if(bugs === 0) {
        return 'Done';
      }
      if(bugs > 0 && bugs < 3) {
        return 'Low';
      }
      if (bugs > 2 && bugs < 5) {
        return 'Medium';
      }
      if (bugs > 4 && bugs < 7) {
        return 'High';
      }
      if (bugs > 6) {
        return 'Critical';
      }
    };

    line[0].split('').forEach(function(letter, i) {
      if(letter !== line[1][i]) {
        errors++;
      }
    });
    console.log(getPriority(errors));
  }
});
