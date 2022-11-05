import { transpose } from "../../matrix/matrix/transpose"

test('undefined matrix', () => {
    expect(() => transpose()).toThrow('Matrix have to be passed')
})

test('matrix 1', () => {
    expect(transpose([[1, 2, 3]])).toStrictEqual([[1], [2], [3]])
})

test('matrix 2', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toStrictEqual([[1, 4], [2, 5], [3, 6]])
})

test('matrix 3', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
})

test('matrix 4', () => {
    expect(transpose([[1], [4], [7]])).toStrictEqual([[1, 4, 7]])
})

test('matrix 5', () => {
    expect(transpose([[1, 4, 7], [2, 5, 8], [3, 6, 9]])).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
})