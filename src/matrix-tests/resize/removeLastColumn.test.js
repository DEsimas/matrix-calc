import { removeLastColumn } from "../../matrix/resize/removeLastColumn"

test('pass not matrix', () => {
    expect(() => removeLastColumn()).toThrow('Matrix have to be passed')
})

test('small matrix', () => {
    expect(() => removeLastColumn([[0]])).toThrow('Matrix have only one column')
})

test('matrix 1', () => {
    expect(removeLastColumn([[1, 2, 3, 4, 5]])).toStrictEqual([[1, 2, 3, 4]])
})

test('matrix 2', () => {
    expect(removeLastColumn([[1, 2, 3, 4, 5], [0, 0, 0, 0, 0], [5, 4, 3, 2, 1]])).toStrictEqual([[1, 2, 3, 4], [0, 0, 0, 0], [5, 4, 3, 2]])
})

test('matrix 3', () => {
    expect(removeLastColumn([[0, 0], [0, 0]])).toStrictEqual([[0], [0]])
})