import { addZeroColumn } from "../../matrix/resize/addZeroColumn"

test('pass not matrix', () => {
    expect(() => addZeroColumn()).toThrow('Matrix have to be passed')
})

test('matrix 1', () => {
    expect(addZeroColumn([[0]])).toStrictEqual([[0, 0]])
})

test('matrix 2', () => {
    expect(addZeroColumn([[1, 2, 3, 4, 5]])).toStrictEqual([[1, 2, 3, 4, 5, 0]])
})

test('matrix 3', () => {
    expect(addZeroColumn([[1, 2, 3, 4, 5], [0, 0, 0, 0, 0], [5, 4, 3, 2, 1]])).toStrictEqual([[1, 2, 3, 4, 5, 0], [0, 0, 0, 0, 0, 0], [5, 4, 3, 2, 1, 0]])
})

test('matrix 4', () => {
    expect(addZeroColumn([[0, 0], [0, 0]])).toStrictEqual([[0, 0, 0], [0, 0, 0]])
})