import { isMatrix } from "../../matrix/validation/isMatrix";

test('pass string', () => {
    expect(isMatrix('uwu')).toBe(false)
})

test('pass object', () => {
    expect(isMatrix({ hello: true })).toBe(false)
})

test('pass array', () => {
    expect(isMatrix([{ hello: true }, 'str'])).toBe(false)
})

test('pass undefined', () => {
    expect(isMatrix()).toBe(false)
})

test('pass array with numbers', () => {
    expect(isMatrix([1, 5, 8])).toBe(false)
})

test('pass two dimensional array', () => {
    expect(isMatrix([['ew', 'ow'], ['ek', '3']])).toBe(false)
})

test('pass square matrix', () => {
    expect(isMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(true)
})

test('pass zero matrix', () => {
    expect(isMatrix([[0, 0, 0], [0, 0, 0]])).toBe(true)
})

test('pass matrix 1 by 1', () => {
    expect(isMatrix([[8]])).toBe(true)
})

test('pass empty two dimensional array', () => {
    expect(isMatrix([[]])).toBe(false)
})

test('pass array with empty arrays', () => {
    expect(isMatrix([[], [], []])).toBe(false)
})

test('pass two dimensional array (not matrix)', () => {
    expect(isMatrix([[8, 8, 8, 9, 9], [1, 2, 3], [0]])).toBe(false)
})

test('pass matrix with NaN', () => {
    expect(isMatrix([[0, 0, 0], [0, NaN, 0]])).toBe(false)
})