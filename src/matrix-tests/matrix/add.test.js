import { add } from "../../matrix/matrix/add"

test('pass not matrix 1', () => {
    expect(() => add()).toThrow('Matrix have to be passed')
})

test('pass not matrix 2', () => {
    expect(() => add([[0]])).toThrow('Matrix have to be passed')
})

test('pass wrong matrices', () => {
    expect(() => add([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 4], [5, 6]])).toThrow('Size of matrices have to be same')
})

test('sum 1', () => {
    expect(add([[1, 2], [4, 5]], [[1, 2], [3, 4]])).toStrictEqual([[2, 4], [7, 9]])
})

test('sum 2', () => {
    expect(add([[1, 2, 9], [4, 5, 9]], [[1, 2, 1], [3, 4, 1]])).toStrictEqual([[2, 4, 10], [7, 9, 10]])
})

test('sum 3', () => {
    expect(add([[5]], [[6]])).toStrictEqual([[11]])
})

test('sum 4', () => {
    expect(add([[5], [4], [3]], [[6], [7], [8]])).toStrictEqual([[11], [11], [11]])
})