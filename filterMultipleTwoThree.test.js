const filterMultipleTwoThree = require('./filterMultipleTwoThree.js');

test('returns error message when array length is not a multiple of 10', () => {
        const input = Array(15).fill(0);
        const output = filterMultipleTwoThree(input);
        expect(output).toBe('15 length isn\'t a multiple of 10.');
});

test('returns filtered array when array length is a multiple of 10', () => {
    const input = Array(10).fill(0);
    const output = filterMultipleTwoThree(input);
    expect(output).toEqual([0,0,0]);
});


test('returns filtered array when array length is a multiple of 10', () => {
    const input = [10,25,36,14,99,45,12,65,48,32,20,45,325,125,6523,1478,125,65,1,20];
    const output = filterMultipleTwoThree(input);
    expect(output).toEqual([10, 99, 12, 20, 325, 125, 1]);
});