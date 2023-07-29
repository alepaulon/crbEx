/*

const inputArray = ["aba", "aa", "ad", "vcd", "aba"]

function solution(inputArray) {
    const arrLongest = [];
    longest = inputArray.sort((a,b) => a.length - b.length)[inputArray.length-1].length;
    console.log(longest);
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length == longest) {
            arrLongest.push(inputArray[i]);
        };
    };
    return arrLongest;
};

console.log(solution(inputArray));

*/

/******** COMMONCHARACTERCOUNT ********/
/* 

const s1 = "aabcc";
const s2 = "adcaa";

/* const filteredArray = [...s1].filter(value => [...s2].includes(value));

console.log(filteredArray); */

/* function commonCharacterCount(s1, s2){
    const common = [];
    const iterable = [...s1];
    
    for (let i of iterable) {
        if (s2.includes(i)) {
            common.push(i);
            s2 = s2.replace(i, '');
        };
    };
    return common.length;
};

console.log(commonCharacterCount(s1,s2));

*/

/****** LUCKY *******/

// Ticket numbers usually consist of an even number of digits. 
//A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//Given a ticket number n, determine if it's lucky or not.

//so, for example: if n = 1230 - true (1+2=3 ; 3+0=3; 3=3) / n = 213842 - false (2+1+3=6; 8+4+2=14; 6=/14)

//i should get the number parsed in half, and then make a sum of each half and compare the results.

/* function solution(n) {
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

console.log(solution(239017));
console.log(solution(1203)); */

/* REVERSE IN PARENTHESIS */
// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Ex: input = "(bar)" - output should be "rab".


