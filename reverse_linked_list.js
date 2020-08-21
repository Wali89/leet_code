var reverse(list) {

  var current = list,
      previous = null;
      
  while(node) {
    var next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  
  return current
}
