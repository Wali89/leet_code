var threeSum = function(nums) {
 var ret = []; //ret is "return"
  if(!nums || nums.length<3) return ret;

  nums = nums.sort(function(a,b){return a-b;});

  for(var y=0;y<nums.length-2;y++) {
    if(y==0 || nums[y]>nums[y-1]) {
      var j = y+1;
      var k = nums.length-1;

      while(j<k) {
        var sum = nums[y]+nums[j]+nums[k];
        if(sum==0) {
          ret.push([nums[y],nums[j],nums[k]]);
          j++;
          k--;

          //skip duplicates from j iterator                   
          while(j<k && nums[j]==nums[j-1])
            j++;

          //skip duplicates from k iterator
          while(j<k && nums[k]==nums[k+1])
            k--;                
        }

        //if sum < 0 then we know we need to increase our lower number (remember the array is sorted)
        else if(sum < 0) {
          j++;
        }
        //if sum > 0 then we need to decrease our upper number
        else {
          k--;
        }
      }
    }
  }

  return ret;
};
