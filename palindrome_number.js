var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let reversed=0, num=x;
    while(num>0){
        reversed=reversed*10 + num%10;
        num=Math.floor(num/10);
    }
    return reversed===x;
}
