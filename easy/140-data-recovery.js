//https://www.codeeval.com/open_challenges/140/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var sp = line.split(';'),
            nums = sp[1].split(' '),
            words = sp[0].split(' '),
            arr = [],
            blank = 0;

        for(var i = 0, l=words.length; i<l; i++) {
            var word = words[i],
                index = i+1;

            if(nums.indexOf(index.toString()) === -1) {
                blank = index;
            }

            if(i<(l-1)) {
                arr[nums[i]-1] = word;
            }
        }

        arr[blank-1]=words[words.length-1];
        console.log(arr.join(' '));
    }
});
