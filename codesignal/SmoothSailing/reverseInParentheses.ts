function reverse(inputString: string): string {
    const re = /\([A-Za-z]*\)/g;
    
    while (re.test(inputString)) {
      inputString = inputString.replace(re, (subinputString) => subinputString.slice(1, subinputString.length - 1).split('').reverse().join(''));
    };
    
    return inputString;
  }