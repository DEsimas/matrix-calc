import { determinant } from "../../matrix/matrix/determinant"

test('undefined as argument', () => {
    expect(() => determinant()).toThrow('Matrix have to be passed')
})

test('not square matrix', () => {
    expect(() => determinant([[1, 2, 3], [4, 5, 6]])).toThrow('Square matrix have to be passed')
})

test('matrix 1 by 1', () => {
    expect(determinant([[8]])).toBe(8)
})

test('matrix 2 by 2', () => {
    expect(determinant([[1, 2], [3, 4]])).toBe(-2)
})

test('matrix 3 by 3', () => {
    expect(determinant([[8, -9, 7], [6, 5, 4], [-3, -2, -1]])).toBe(99)
})

test('matrix 4 by 4', () => {
    expect(determinant([[8, -9, 7, 1], [6, 5, 4, 2], [-3, -2, -1, 3], [1, 2, 3, 4]])).toBe(-561)
})

test('matrix 5 by 5', () => {
    expect(determinant([[8, -9, 7, 1, 8], [6, 5, 4, 2, 8], [-3, -2, -1, 3, 8], [1, 2, 3, 4, 8], [6, 6, 6, 6, 6]])).toBe(6138)
})