'use strict'


// 4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.

function calcProdDig(n) {
    let sum = 0;
    let prod = 1;
    
    if (n <= 0 || n === undefined) {
        return 'Cannot calculate.';
    }
    
    while (n) {
        sum += n % 10;
        prod *= n % 10;
        n = Math.floor(n / 10);
    }
    
    if (prod % sum === 0) {
        return `Quotient is ${prod / sum}.`;
    } else {
        return `Reminder is ${prod % sum}.`;
    }
    
}

console.log(calcProdDig(1233));
console.log(calcProdDig(5));
console.log(calcProdDig(0));
console.log(calcProdDig(455));
