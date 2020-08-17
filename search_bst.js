var searchBST = function(root, val) {
    if (root == null ) return null
    
    if (root.val === val) return root
    
    return searchBST(root.left, val) || searchBST(root.right, val)
};
