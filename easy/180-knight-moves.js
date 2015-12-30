//https://www.codeeval.com/open_challenges/180/
var fs = require("fs"),
    directions = [[1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1]],
    alpha = "abcdefgh",
    gridSize = alpha.length;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if(line !== "") {
        var colPos = alpha.indexOf(line[0]),
            rowPos = gridSize - line[1],
            validMoves = [];

        directions.forEach(function(direction) {
            var row = direction[0],
                col = direction[1],

                rowSum = (row > 0) ? rowPos + row : rowPos - Math.abs(row),
                colSum = (col > 0) ? colPos + col : colPos - Math.abs(col);

            if((rowSum >= 0 && rowSum < gridSize) && (colSum >= 0  && colSum < gridSize)) {
                validMoves.push(alpha[colSum] + "" + (gridSize-rowSum));
            }
            return validMoves;
        });

        console.log(validMoves.sort().join(' '));
    }
});
