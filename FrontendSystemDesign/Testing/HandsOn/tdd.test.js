// Palindrome check
// isPalindrome()
const isPalindrome = require('./tdd');

test('// abc -> false', () => {
    const result = isPalindrome('abc');
    expect(result).toBe(false);
})

test('// no input -> null', () => {
    const result = isPalindrome();
    expect(result).toBe(false);
})



test('// null -> null', () => {
    const result = isPalindrome(null);
    expect(result).toBe(null);
})


test('// single -> is always true', () => {
    const result = isPalindrome(1);
    expect(result).toBe(true);
})


test('// 123 -> false', () => {
    const result = isPalindrome(123);
    expect(result).toBe(false);
})

test('// 121 -> true', () => {
    const result = isPalindrome(121);
    expect(result).toBe(true);
})


test('// negative number -121 -> true', () => {
    const result = isPalindrome(-121);
    expect(result).toBe(true);
})


test('// {} -> false', () => {
    const result1 = isPalindrome({});
    expect(result1).toBe(false);
})

test('// []-> false', () => {
    const result2 = isPalindrome([]);
    expect(result2).toBe(false);
})

test('// () => {} -> false', () => {
    const result3 = isPalindrome(() => { });
    expect(result3).toBe(false);
})

test('// boolean -> false', () => {
    const result1 = isPalindrome(true);
    expect(result1).toBe(false);
})

test('// Aba -> true', () => {
    const result = isPalindrome('Aba');
    expect(result).toBe(true);
})


test('// "      aba  " -> true', () => {
    const result = isPalindrome("      aba  ");
    expect(result).toBe(true);
})


test('// length > 10 -> null', () => {
    const result = isPalindrome("asdasdegafasfff");
    expect(result).toBe(null);
})


test('// multiple inputs -> ignore the rest', () => {
    const result = isPalindrome("aba", "abc");
    expect(result).toBe(true);
})
