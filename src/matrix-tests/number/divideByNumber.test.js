import { divideByNumber } from "../../matrix/number/divideByNumber"

test('undefined matrix', () => {
    expect(() => divideByNumber()).toThrow('Matrix have to be passed')
})

test('undefined number', () => {
    expect(() => divideByNumber([[5]])).toThrow('Second argument have to be number')
})

test('matrix 1', () => {
    expect(divideByNumber([[5]], 1)).toStrictEqual([[5]])
})

test('matrix 2', () => {
    expect(divideByNumber([[5]], 0.25)).toStrictEqual([[20]])
})

test('matrix 3', () => {
    expect(divideByNumber([[5]], -1)).toStrictEqual([[-5]])
})

test('matrix 4', () => {
    expect(() => divideByNumber([[5]], 0)).toThrow('Can\'t divide by 0')
})

test('matrix 5', () => {
    expect(divideByNumber([[5, 3, 2]], 1)).toStrictEqual([[5, 3, 2]])
})

test('matrix 6', () => {
    expect(divideByNumber([[5, 8, 0]], 0.25)).toStrictEqual([[20, 32, 0]])
})

test('matrix 7', () => {
    expect(divideByNumber([[5, 7, 9]], -1)).toStrictEqual([[-5, -7, -9]])
})

test('matrix 8', () => {
    expect(() => divideByNumber([[5, 3, 2]], 0)).toThrow('Can\'t divide by 0')
})

test('matrix 9', () => {
    expect(divideByNumber([[5, 3, 2], [4, 3, 2]], 1)).toStrictEqual([[5, 3, 2], [4, 3, 2]])
})

test('matrix 10', () => {
    expect(divideByNumber([[5, 8, 0], [0, 0, 0]], 0.25)).toStrictEqual([[20, 32, 0], [0, 0, 0]])
})

test('matrix 11', () => {
    expect(divideByNumber([[5, 7, 9], [9, 4, 2]], -1)).toStrictEqual([[-5, -7, -9], [-9, -4, -2]])
})

test('matrix 12', () => {
    expect(() => divideByNumber([[5, 3, 2], [9, 8, 7]], 0)).toThrow('Can\'t divide by 0')
})