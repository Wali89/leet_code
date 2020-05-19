var threeSumClosest = function(nums, target) {

    nums.sort((a, b) => a - b);
    let closest = null;
    
    for(let i = 0; i < nums.length; i++) {
        let low = i + 1;
        let high = nums.length - 1;
        
        while(low < high) {
            const sum = nums[i] + nums[low] + nums[high];
            const myDiff = Math.abs(target - sum);
            const currDiff = Math.abs(target - closest);
            
            if(myDiff < currDiff || closest === null) {
                closest = sum;
            }  
            
            if(sum === target) {
                return sum
            } else if(sum < target) {
                low++;
            } else {
                high--;
            }
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return closest;
};
