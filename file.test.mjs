const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./file.js');


it('Capitalize', () => {
    expect(capitalize("truck")).toBe("Truck")
});

it('Reverse string', () => {
    expect(reverseString("car")).toBe("rac")
});

it('Calculator', () => {
    expect(calculator.add(10, 2)).toBe(12)
    expect(calculator.subtract(10, 2)).toBe(8)
    expect(calculator.divide(10, 2)).toBe(5)
    expect(calculator.multiply(10, 2)).toBe(20)
})

it('Caesar cipher shifts lowercase letters', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
});

it('Caesar cipher preserves uppercase letters', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
});

it('Caesar cipher preserves punctuation and spaces', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
});

it('Caesar cipher handles a shift of zero', () => {
    expect(caesarCipher("Hello", 0)).toBe("Hello")
});

it('Analyze array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

