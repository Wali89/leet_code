var reverse = function(x) {
    return (
        parseFloat(
            x
            .toString()
            .split('')
            .reverse()
            .join('')
        )* Math.sign(x)
    );
   
};
