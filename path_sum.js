var hasPathSum = function(root, sum) {
    return hasPathSumHelper(root, sum, 0)
};

function hasPathSumHelper(root, sum, check) {
    if(root === null) return false
    
    check += root.val
    
    if(root.left === null && root.right === null && check === sum) return true
    
    let left = hasPathSumHelper(root.left, sum, check)
    let right = hasPathSumHelper(root.right, sum, check)
    
    return left === true || right === true
}
