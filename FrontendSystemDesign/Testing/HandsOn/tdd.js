const isPalindrome = (item) => {
    if (item === null) {
        return null;
    }

    console.log('item', item, typeof item)

    if (["object", "boolean", "function", "undefined"].includes(typeof item)) {
        return false;
    }

    const inputItem = typeof item === "number" ? Math.abs(item).toString() : item.trim().toLowerCase();
    if (inputItem.length === 1) {
        return true;
    } else if (inputItem.length === 0) {
        return null;
    } else if (inputItem.length > 10) {
        return null;
    }

    const revItem = inputItem.split('').reverse().join('');

    return inputItem === revItem;
}

module.exports = isPalindrome;