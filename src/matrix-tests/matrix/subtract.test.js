import { subtract } from "../../matrix/matrix/subtract"

test('pass not matrix 1', () => {
    expect(() => subtract()).toThrow('Matrix have to be passed')
})

test('pass not matrix 2', () => {
    expect(() => subtract([[0]])).toThrow('Matrix have to be passed')
})

test('pass wrong matrices', () => {
    expect(() => subtract([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 4], [5, 6]])).toThrow('Size of matrices have to be same')
})

test('sum 1', () => {
    expect(subtract([[1, 2], [4, 5]], [[1, 2], [3, 4]])).toStrictEqual([[0, 0], [1, 1]])
})

test('sum 2', () => {
    expect(subtract([[1, 2, 9], [4, 5, 9]], [[1, 2, 1], [3, 4, 1]])).toStrictEqual([[0, 0, 8], [1, 1, 8]])
})

test('sum 3', () => {
    expect(subtract([[5]], [[6]])).toStrictEqual([[-1]])
})

test('sum 4', () => {
    expect(subtract([[5], [4], [3]], [[6], [7], [8]])).toStrictEqual([[-1], [-3], [-5]])
})