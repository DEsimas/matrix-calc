import { isSquareMatrix } from "../../matrix/validation/isSquareMatrix";

test('pass string', () => {
    expect(isSquareMatrix('uwu')).toBe(false)
})

test('pass object', () => {
    expect(isSquareMatrix({ hello: true })).toBe(false)
})

test('pass array', () => {
    expect(isSquareMatrix([{ hello: true }, 'str'])).toBe(false)
})

test('pass undefined', () => {
    expect(isSquareMatrix()).toBe(false)
})

test('pass array with numbers', () => {
    expect(isSquareMatrix([1, 5, 8])).toBe(false)
})

test('pass two dimensional array', () => {
    expect(isSquareMatrix([['ew', 'ow'], ['ek', '3']])).toBe(false)
})

test('pass square matrix', () => {
    expect(isSquareMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(true)
})

test('pass zero not square matrix', () => {
    expect(isSquareMatrix([[0, 0, 0], [0, 0, 0]])).toBe(false)
})

test('pass matrix 1 by 1', () => {
    expect(isSquareMatrix([[8]])).toBe(true)
})

test('pass empty two dimensional array', () => {
    expect(isSquareMatrix([[]])).toBe(false)
})

test('pass array with empty arrays', () => {
    expect(isSquareMatrix([[], [], []])).toBe(false)
})

test('pass two dimensional array (not matrix)', () => {
    expect(isSquareMatrix([[8, 8, 8, 9, 9], [1, 2, 3], [0]])).toBe(false)
})

test('pass matrix with NaN', () => {
    expect(isSquareMatrix([[0, 0, 0], [0, NaN, 0]])).toBe(false)
})

test('pass not square matrix', () => {
    expect(isSquareMatrix([[0], [0], [0]])).toBe(false)
})

test('pass square matrix', () => {
    expect(isSquareMatrix([[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toBe(true)
})