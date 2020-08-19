var selfDividingNumbers = function(left, right) {
    let ret = [];
    
    const helper = (n) => {
        let ans = true,
            check = n;
        while(check > 0) {
            let a = check % 10;
            
            if(a == 0 || n % a !== 0){
                ans = false;
                return
            } 
        
            check = Math.floor(check/10)
        }
        return ans
    
    }
    
    for(let i =left; i <= right;i++){
        if (helper(i) === true) {
            ret.push(i)
        }
    }
    
    
    
    
    return ret
}
