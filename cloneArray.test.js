const cloneArray = require("./cloneArray");

test("Test the clone array",() => {
    const array = [1,2,3];
    expect(cloneArray(array)).toStrictEqual([1,2,3]);
});