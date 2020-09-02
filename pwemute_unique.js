var permuteUnique = function(nums) {
    const result = [];
    
    function permute(options, arr=[]) {
        if(!options.length) result.push(arr);
        const visited = new Set();
        
        for(let i = 0; i < options.length; i++) {
            if(visited.has(options[i])) continue;
            permute([...options.slice(0, i), ...options.slice(i+1)], [...arr, options[i]]);
            visited.add(options[i]);
        }
    }
    permute(nums);
    return result;
};
