var removeDuplicates = function(nums) {
  let i = 1;
  let j = 0; 
  while (i < nums.length) {
    let num = nums[i];
    if (nums[j] !== num){
      nums[++j] = num;
    } else {
      i++;
    }
  }
  return j + 1;
};
