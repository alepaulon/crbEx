function solution(n) {
    const numStr = String(n);
    const half = numStr.length / 2;
    const firstHalf = parseInt(numStr.slice(0, half));
    const secondHalf = parseInt(numStr.slice(half));
    
    const sum1 = sumDigits(firstHalf);
    const sum2 = sumDigits(secondHalf);
    
    if (sum1 === sum2) {
        return true;
    };
    return false;
};

function sumDigits(num) {
    const str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const number = parseInt(str[i]);
        sum += number;
    };
    return sum;
};
