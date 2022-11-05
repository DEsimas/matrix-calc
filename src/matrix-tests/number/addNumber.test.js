import { addNumber } from "../../matrix/number/addNumber"

test('undefined matrix', () => {
    expect(() => addNumber()).toThrow('Matrix have to be passed')
})

test('undefined number', () => {
    expect(() => addNumber([[5]])).toThrow('Second argument have to be number')
})

test('matrix 1', () => {
    expect(addNumber([[5]], 1)).toStrictEqual([[6]])
})

test('matrix 2', () => {
    expect(addNumber([[5]], 0.25)).toStrictEqual([[5.25]])
})

test('matrix 3', () => {
    expect(addNumber([[5]], -1)).toStrictEqual([[4]])
})

test('matrix 4', () => {
    expect(addNumber([[5]], 0)).toStrictEqual([[5]])
})

test('matrix 5', () => {
    expect(addNumber([[5, 3, 2]], 1)).toStrictEqual([[6, 4, 3]])
})

test('matrix 6', () => {
    expect(addNumber([[5, 8, 0]], 0.25)).toStrictEqual([[5.25, 8.25, 0.25]])
})

test('matrix 7', () => {
    expect(addNumber([[5, 7, 9]], -1)).toStrictEqual([[4, 6, 8]])
})

test('matrix 8', () => {
    expect(addNumber([[5, 3, 2]], 0)).toStrictEqual([[5, 3, 2]])
})

test('matrix 9', () => {
    expect(addNumber([[5, 3, 2], [4, 3, 2]], 1)).toStrictEqual([[6, 4, 3], [5, 4, 3]])
})

test('matrix 10', () => {
    expect(addNumber([[5, 8, 0], [0, 0, 0]], 0.25)).toStrictEqual([[5.25, 8.25, 0.25], [0.25, 0.25, 0.25]])
})

test('matrix 11', () => {
    expect(addNumber([[5, 7, 9], [9, 4, 2]], -1)).toStrictEqual([[4, 6, 8], [8, 3, 1]])
})

test('matrix 12', () => {
    expect(addNumber([[5, 3, 2], [9, 8, 7]], 0)).toStrictEqual([[5, 3, 2], [9, 8, 7]])
})