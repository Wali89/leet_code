var isBalanced = function(root) {

    if(!root) return true;

    const helper = (node) => {
        if(!node) return 0;
        

        const leftLength = helper(node.left);
        if(leftLength === false) return false;

        const rightLength = helper(node.right);
        if(rightLength === false) return false;
        

        if(Math.abs(leftLength - rightLength) > 1) return false;

        return 1 + Math.max(leftLength, rightLength)
    }

    return helper(root) !== false;
};
