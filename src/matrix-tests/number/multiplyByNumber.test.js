import { multiplyByNumber } from "../../matrix/number/multiplyByNumber"

test('undefined matrix', () => {
    expect(() => multiplyByNumber()).toThrow('Matrix have to be passed')
})

test('undefined number', () => {
    expect(() => multiplyByNumber([[5]])).toThrow('Second argument have to be number')
})

test('matrix 1', () => {
    expect(multiplyByNumber([[5]], 1)).toStrictEqual([[5]])
})

test('matrix 2', () => {
    expect(multiplyByNumber([[5]], 0.25)).toStrictEqual([[1.25]])
})

test('matrix 3', () => {
    expect(multiplyByNumber([[5]], -1)).toStrictEqual([[-5]])
})

test('matrix 4', () => {
    expect(multiplyByNumber([[5]], 0)).toStrictEqual([[0]])
})

test('matrix 5', () => {
    expect(multiplyByNumber([[5, 3, 2]], 1)).toStrictEqual([[5, 3, 2]])
})

test('matrix 6', () => {
    expect(multiplyByNumber([[5, 8, 0]], 0.25)).toStrictEqual([[1.25, 2, 0]])
})

test('matrix 7', () => {
    expect(multiplyByNumber([[5, 7, 9]], -1)).toStrictEqual([[-5, -7, -9]])
})

test('matrix 8', () => {
    expect(multiplyByNumber([[5, 3, 2]], 0)).toStrictEqual([[0, 0, 0]])
})

test('matrix 9', () => {
    expect(multiplyByNumber([[5, 3, 2], [4, 3, 2]], 1)).toStrictEqual([[5, 3, 2], [4, 3, 2]])
})

test('matrix 10', () => {
    expect(multiplyByNumber([[5, 8, 0], [0, 0, 0]], 0.25)).toStrictEqual([[1.25, 2, 0], [0, 0, 0]])
})

test('matrix 11', () => {
    expect(multiplyByNumber([[5, 7, 9], [9, 4, 2]], -1)).toStrictEqual([[-5, -7, -9], [-9, -4, -2]])
})

test('matrix 12', () => {
    expect(multiplyByNumber([[5, 3, 2], [9, 8, 7]], 0)).toStrictEqual([[0, 0, 0], [0, 0, 0]])
})