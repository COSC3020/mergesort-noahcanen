function mergesort(array) {
    
    let hi = array.length;
    for (var i = 1; i < hi-1; i=i*2)
    {
        for(var k = 0; k <= hi; k= k + i*2) {
            
            for(var s1 = k; s1 < k + i*2;s1++){
                for(var s2 = k; s2 < k + i*2;s2++){
                    if(x[s1]  < x[s2]) {
                        temp = x[s1];
                        x[s1] = x[s2];
                        x[s2] = temp;

                    } 
                }
            }
        }

    }
    return array;
}
