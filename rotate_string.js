var rotateString = function(A, B) {
        
    let C = A + A
    console.log(C, C.indexOf(B))
    if (A.length !== B.length ) {
        return false
    }
    
    if(C.indexOf(B) !== -1) {
        return true
    } else {
        return false
    }
        
    
};
