const validParenthesis = function (inputStr) {
    const stackPool = [];

    for (let currChar of inputStr) {
        if ([')', '}', ']'].includes(currChar)) {
            const lastEl = stackPool.pop();
            if ((currChar === ')' && lastEl !== '(') || (currChar === '}' && lastEl !== '{') || (currChar === ']' && lastEl !== '[')) {
                return false;
            }
        } else {
            stackPool.push(currChar);
        }
    }

    if (stackPool.length) return false;

    return true;
}

console.log(validParenthesis('(({}{}))[]'));