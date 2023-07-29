function solution(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let arr = [];
    
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    
    return arr.length - statues.length;
}