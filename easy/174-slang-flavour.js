//https://www.codeeval.com/open_challenges/174/

var fs  = require("fs");
var slang = [
    ', yeah!',
    ', this is crazy, I tell ya.',
    ', can U believe this?',
    ', eh?',
    ', aw yea.',
    ', yo.',
    '? No way!',
    '. Awesome!'
];
var i, len, options = /[!.?]/, counter = 1, x = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var output = genOutput(line);
        console.log(output);
    }
});

function genOutput(line) {
    var len = line.length,
        output = "";

    for(i = 0; i<len; i++) {
        if(x === slang.length) x = 0;
        var letter = line[i];
        if(options.test(letter)) {
            counter++;
            if(counter % 2 !== 0) {
                output = output.substr(0,output.length) + slang[x];
                x++;
            }
            else {
                output+=letter;
            }
        }
        else {
            output+=letter;
        }
    }
    return output;
}
