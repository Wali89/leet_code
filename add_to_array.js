var addToArrayForm = function(A, K) {
    // i = current index of array A
    // c = carry
    // k = current least significant digit of K
    // a = current least significant digit of A
    // d = current digit to push
    
    const n = A.length
    const temp = []
    let i = n - 1
    let c = 0
    
    while (i >= 0 || K > 0) {
        let k = K % 10
        let a = i < 0 ? 0 : A[i]
        let s = k + a + c
        let d = s % 10
        temp.push(d)
        c = s > 9 ? 1 : 0
        K = Math.floor(K / 10)
        i--
    }

    if (c == 1) temp.push(c)
    
    return temp.reverse()
};
