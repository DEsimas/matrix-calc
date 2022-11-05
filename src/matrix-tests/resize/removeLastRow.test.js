import { removeLastRow } from "../../matrix/resize/removeLastRow"

test('pass not matrix', () => {
    expect(() => removeLastRow()).toThrow('Matrix have to be passed')
})

test('small matrix', () => {
    expect(() => removeLastRow([[0]])).toThrow('Matrix have only one row')
})

test('matrix 1', () => {
    expect(removeLastRow([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]])).toStrictEqual([[1, 2, 3, 4, 5]])
})

test('matrix 2', () => {
    expect(removeLastRow([[1, 2, 3, 4, 5], [0, 0, 0, 0, 0], [5, 4, 3, 2, 1]])).toStrictEqual([[1, 2, 3, 4, 5], [0, 0, 0, 0, 0]])
})

test('matrix 3', () => {
    expect(removeLastRow([[0, 0], [0, 0]])).toStrictEqual([[0, 0]])
})