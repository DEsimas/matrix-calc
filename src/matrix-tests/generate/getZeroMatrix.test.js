import { getZeroMatrix } from "../../matrix/generate/getZeroMatrix"

test('pass string as height', () => {
    expect(() => getZeroMatrix('hello', 1)).toThrow('Height have to be a number, recieved hello')
})

test('pass object as height', () => {
    expect(() => getZeroMatrix({ size: 3 }, 1)).toThrow('Height have to be a number, recieved [object Object]')
})

test('pass undefined as height', () => {
    expect(() => getZeroMatrix()).toThrow('Height have to be a number, recieved undefined')
})

test('pass NaN as height', () => {
    expect(() => getZeroMatrix(NaN, 1)).toThrow('Height have to be a number, recieved NaN')
})

test('pass zero as height', () => {
    expect(() => getZeroMatrix(0, 1)).toThrow(`Height have to be positive integer, recieved 0`)
})

test('pass negative as height', () => {
    expect(() => getZeroMatrix(-1, 1)).toThrow(`Height have to be positive integer, recieved -1`)
})

test('pass float as height', () => {
    expect(() => getZeroMatrix(2.65, 1)).toThrow(`Height have to be positive integer, recieved 2.65`)
})

test('pass string as width', () => {
    expect(() => getZeroMatrix(1, 'hello')).toThrow('Width have to be a number, recieved hello')
})

test('pass object as width', () => {
    expect(() => getZeroMatrix(1, { size: 3 })).toThrow('Width have to be a number, recieved [object Object]')
})

test('pass undefined as width', () => {
    expect(() => getZeroMatrix(1)).toThrow('Width have to be a number, recieved undefined')
})

test('pass NaN as width', () => {
    expect(() => getZeroMatrix(1, NaN)).toThrow('Width have to be a number, recieved NaN')
})

test('pass zero as width', () => {
    expect(() => getZeroMatrix(1, 0)).toThrow(`Width have to be positive integer, recieved 0`)
})

test('pass negative as width', () => {
    expect(() => getZeroMatrix(1, -1)).toThrow(`Width have to be positive integer, recieved -1`)
})

test('pass float as width', () => {
    expect(() => getZeroMatrix(1, 2.65)).toThrow(`Width have to be positive integer, recieved 2.65`)
})

test('get zero matrix 1 by 1', () => {
    expect(getZeroMatrix(1, 1)).toStrictEqual([[0]])
})

test('get zero matrix 1 by 3', () => {
    expect(getZeroMatrix(1, 3)).toStrictEqual([[0, 0, 0]])
})

test('get zero matrix 2 by 2', () => {
    expect(getZeroMatrix(2, 2)).toStrictEqual([[0, 0], [0, 0]])
})

test('get zero matrix 2 by 3', () => {
    expect(getZeroMatrix(2, 3)).toStrictEqual([[0, 0, 0], [0, 0, 0]])
})

test('get zero matrix 3 by 3', () => {
    expect(getZeroMatrix(3, 3)).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
})

test('get zero matrix 3 by 2', () => {
    expect(getZeroMatrix(3, 2)).toStrictEqual([[0, 0], [0, 0], [0, 0]])
})

test('get zero matrix 4.0 by 4.0', () => {
    expect(getZeroMatrix(4.0, 4.0)).toStrictEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
})

test('get zero matrix 4 by 1', () => {
    expect(getZeroMatrix(4, 1)).toStrictEqual([[0], [0], [0], [0]])
})

test('get zero matrix 5 by 5', () => {
    expect(getZeroMatrix(5, 5)).toStrictEqual([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])
})

test('get zero matrix 5 by 3', () => {
    expect(getZeroMatrix(5, 3)).toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
})