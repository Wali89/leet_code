var deleteDuplicates = function(head) {
    const traverse = (curr, prev) => {
        if (curr === null) {
            return;
        }
        
        if (prev && prev.val === curr.val) {
            // remove current node by linking previous node to the next node
            prev.next = curr.next;
            traverse(curr.next, prev);    
        } else {
            traverse(curr.next, curr);    
        }
    }
    
    traverse(head, null);
    return head;
};
