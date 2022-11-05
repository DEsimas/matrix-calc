import { subtractNumber } from "../../matrix/number/subtractNumber"

test('undefined matrix', () => {
    expect(() => subtractNumber()).toThrow('Matrix have to be passed')
})

test('undefined number', () => {
    expect(() => subtractNumber([[5]])).toThrow('Second argument have to be number')
})

test('matrix 1', () => {
    expect(subtractNumber([[5]], 1)).toStrictEqual([[4]])
})

test('matrix 2', () => {
    expect(subtractNumber([[5]], 0.25)).toStrictEqual([[4.75]])
})

test('matrix 3', () => {
    expect(subtractNumber([[5]], -1)).toStrictEqual([[6]])
})

test('matrix 4', () => {
    expect(subtractNumber([[5]], 0)).toStrictEqual([[5]])
})

test('matrix 5', () => {
    expect(subtractNumber([[5, 3, 2]], 1)).toStrictEqual([[4, 2, 1]])
})

test('matrix 6', () => {
    expect(subtractNumber([[5, 8, 0]], 0.25)).toStrictEqual([[4.75, 7.75, -0.25]])
})

test('matrix 7', () => {
    expect(subtractNumber([[5, 7, 9]], -1)).toStrictEqual([[6, 8, 10]])
})

test('matrix 8', () => {
    expect(subtractNumber([[5, 3, 2]], 0)).toStrictEqual([[5, 3, 2]])
})

test('matrix 9', () => {
    expect(subtractNumber([[5, 3, 2], [4, 3, 2]], 1)).toStrictEqual([[4, 2, 1], [3, 2, 1]])
})

test('matrix 10', () => {
    expect(subtractNumber([[5, 8, 0], [0, 0, 0]], 0.25)).toStrictEqual([[4.75, 7.75, -0.25], [-0.25, -0.25, -0.25]])
})

test('matrix 11', () => {
    expect(subtractNumber([[5, 7, 9], [9, 4, 2]], -1)).toStrictEqual([[6, 8, 10], [10, 5, 3]])
})

test('matrix 12', () => {
    expect(subtractNumber([[5, 3, 2], [9, 8, 7]], 0)).toStrictEqual([[5, 3, 2], [9, 8, 7]])
})