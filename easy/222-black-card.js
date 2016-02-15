//https://www.codeeval.com/open_challenges/222/

var fs  = require("fs");
fs.readFileSync('test.txt').toString().split('\n').forEach(function (line) {
  if(line !== '') {

    var sanitise = function(str) {
        return str
          .trim()
          .replace(/\r/, '');
    };

    var getStrItem = function(str, index) {
      str = str.split(' | ');
      return str[index];
    };

    var toArray = function(str, separator) {
        return str.split(separator || '');
    };

    var getPirate = function(players, pirate) {
      var allPlayers = players,
          maxIterations = pirate - 1,
          lenAllPlayers = allPlayers.length;

      while(lenAllPlayers > 1) {
        allPlayers = players.filter(function(player, index) {
          return index !== maxIterations;
        });

        lenAllPlayers = allPlayers.length;
      }
    };

    var str = sanitise(line),
        players = getStrItem(str, 0),
        pirates = getStrItem(str, 1);

    getPirate(toArray(players, ' '), pirates);
  }
});
