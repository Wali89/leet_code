class Solution(object):
    def addTwoNumbers(self, l1, l2):
      
        p1 = l1
        p2 = l2
        
        currentCarry = 0
        
        head = cur = ListNode(0)
        
        while p1 or p2 or currentCarry:
            
            currentVal = currentCarry
            
            currentVal += 0 if p1 is None else p1.val
            currentVal += 0 if p2 is None else p2.val
            
            if currentVal >= 10:
                currentVal -= 10
                currentCarry = 1
            
            else:
                currentCarry = 0
                
            cur.next = ListNode(currentVal)
            cur = cur.next
                
            if p1 is None and p2 is None:
                break
            elif p1 is None:
                p2 = p2.next
            elif p2 is None:
                p1 = p1.next
            else:
                p1 = p1.next
                p2 = p2.next
                
        return head.next
                
