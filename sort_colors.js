var sortColors = function(nums) {
    let left = 0, right = nums.length - 1, i = 0;
    
    while(i <= right) {
         if (nums[i] === 0) {
            swap(i, left);
            left++;
            i++;
        } else if (nums[i] === 2) {
            swap(i, right);
            right--;
        } else i++;
    }
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
