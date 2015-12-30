//https://www.codeeval.com/open_challenges/37/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.trim();
	if (line !== "") {
        var alphabet = {
            a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0
        };

        for(var i = 0, l = line.length; i<l; i++) {
            var letter = line[i].toLowerCase();
            if(alphabet.hasOwnProperty(letter)) {
                alphabet[letter]+=1;
            }
        }
        var output = "";
        for(var x in alphabet) {
            if(alphabet[x] === 0) {
                output+=x;
            }
        }
        console.log(output === "" ? "NULL" : output);
    }
});
