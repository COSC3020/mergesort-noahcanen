function mergesort(x) {

    let hi = x.length;

     for (var i = 1; i < hi; i= i*2){
         for(var k = 0; k < hi; k = k + i*2) {
            for(var s1 = i; s1 <= k + i+i && s1 < hi ;s1++){
                for(var s2 = k  ; s2 < k + i+i && s2 < hi ;s2++){
                     if(x[s1]  < x[s2]) {
                        temp = x[s1];
                        x[s1] = x[s2];
                        x[s2] = temp;

                    } 
                }
            }
        }

    }
    return x;
}
