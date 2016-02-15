// https://www.codeeval.com/open_challenges/37/

var fs  = require('fs');
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
	if (line !== '') {
    var toLower = function(str) {
      return str.toLowerCase();
    };

    var missingLetters = function(str) {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz',
          missing = alphabet.split('').filter(function(letter, index) {
            return str.indexOf(letter) === -1;
          });

      return (missing.length) ? missing.join('') : 'NULL';
    };

    console.log(missingLetters(toLower(line)));
  }
});
