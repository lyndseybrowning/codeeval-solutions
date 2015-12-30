//https://www.codeeval.com/open_challenges/23/
var i = 1, out, max = 13;

for(i;i<max;i++) {
    out = '';
    console.log(next(i, 1));
}

function next(j,x) {
    var n, len;
    if(x < max) {
        n = j*x;
        len = n.toString().length;
        out+=(n<100) ? ' ' : '';
        out+= (len === 1) ? '  ' +n : ' '+n;
        next(j, x+=1);
    }
    return out;
}
