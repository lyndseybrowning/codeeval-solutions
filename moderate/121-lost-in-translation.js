//https://www.codeeval.com/open_challenges/121/

var obj = {
	y: "a",
	n: "b",
	f: "c",
	i: "d",
	c: "e",
	w: "f",
	l: "g",
	b: "h",
	k: "i",
	u: "j",
	o: "k",
	m: "l",
	x: "m",
	s: "n",
	e: "o",
	v: "p",
	z: "q",
	p: "r",
	d: "s",
	r: "t",
	j: "u",
	g: "v",
	t: "w",
	h: "x",
	a: "y",
	q: "z"
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var str = "";
        for(var i=0; i<line.length; i++) {
            str+= obj.hasOwnProperty(line[i]) ? obj[line[i]] : " ";
        }
        console.log(str);
    }
});
