function solution(s1, s2) {
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