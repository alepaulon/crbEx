function sort(a: number[]): number[] {
    const firstArr = [...a];
    const orderedArr = firstArr.filter(i => i !== -1).sort((a,b) => a-b);
    return firstArr.map((i, index) => {
        if(i !== -1){
            return orderedArr.shift();
        } else {
            return -1;
        };
    });

}
