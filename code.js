function merge(x, s, m, hi){
    let s2 = m + 1;

    if (x[m] <= x[s2]) {
        //console.log("1-1",x[m],x[s2])
        return;
    }
    //console.log("1")
    while (s <= m && s2 <= hi ) {
        //console.log("2")
        if (x[s] <= x[s2]) {
            s++;
            //console.log("3-1")
        }
        else {
            //console.log("3")
            value = x[s2];
            index = s2;

            while (index != s) {
                //console.log("4")
                x[index] = x[index - 1];
                index--;
            }
            x[s] = value;

            s++;
            m++;
            s2++;
        }
    }
}
function mergesort(x) {

    let hi = x.length-1;

    for (var i = 1; i <= hi; i= i*2){
        for(var k = 0; k < hi; k = k + i*2) {

            s = k 
            if (k +i-1 < hi){m = k +i-1}
            else{m = hi}
            if (k +i*2-1 < hi){h = k +i*2-1}
            else{h = hi}

           
            merge(x, s, m, h)
            //console.log(x, s, m, h, "merge");
        }

    }
    

    return x;
}

