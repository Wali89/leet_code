var addTwoNumbers = function(l1, l2) {
    let runner1 = l1;
    let runner2 = l2;
    let isOverTen = false;
    let head = new ListNode(null);
    let current = head;
    
    while (runner1 || runner2 || isOverTen) {
        
        let value1 = runner1 ? runner1.val : 0;
        let value2 = runner2 ? runner2.val : 0;
        
        let total = isOverTen ? value1 + value2 + 1 : value1 + value2;
        isOverTen = total > 9 ? true : false;
        total = total % 10;
        
        current.next = new ListNode(total);
        current = current.next;
        
        if (runner1) {
            runner1 = runner1.next
        }
        if (runner2) {
            runner2 = runner2.next;
        }
    }
    
    return head.next;
};
