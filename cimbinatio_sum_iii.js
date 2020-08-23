var combinationSum3 = function(k, n) {
    const solArr = [];
    
    const recurse = (currArr, target, index) => {
        if (target < 0 || currArr.length > k) return;
        if (currArr.length === k) return target === 0 && solArr.push(currArr.slice())
        
        for (let i = index; i <= 9; i++) {
            currArr.push(i);
            recurse(currArr, target - i, i + 1);
            currArr.pop();
        }
    };

    recurse([], n, 1);
    
    return solArr;
};
