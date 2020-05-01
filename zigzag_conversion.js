var convert = function(s, numRows) {
    if(numRows===1){return s}
    let y=0;
    let increment=true;
    const rows = [...new Array(numRows)].map(_=>[]);
    
    for(i=0;i< s.length;i++) {
        
        const char = s[i];
        
        rows[y].push(char);
        
         if(y === numRows - 1) increment = false;
         if(y === 0) increment = true
         y = increment ? y+1 : y-1
         if(increment) {
             if (y === numRows-1) {
                 y--
             } else y ++;
         } else {
             if (y===0) {
                 y++
             } else {
                 y--
             }
         }
        
    }
    return rows.reduce((string, row) => string+ row.join(''), '');
    
};
