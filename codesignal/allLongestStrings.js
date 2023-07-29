function solution(inputArray) {
    const arrLongest = [];
    longest = inputArray.sort((a,b) => a.length - b.length)[inputArray.length-1].length;
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length == longest) {
            arrLongest.push(inputArray[i]);
        };
    };
    return arrLongest;
};