import { getIdentityMatrix } from "./../../matrix/generate/getIdentityMatrix";

test('pass string', () => {
    expect(() => getIdentityMatrix('hello')).toThrow('Size have to be a number, recieved hello')
})

test('pass object', () => {
    expect(() => getIdentityMatrix({ size: 3 })).toThrow('Size have to be a number, recieved [object Object]')
})

test('pass undefined', () => {
    expect(() => getIdentityMatrix()).toThrow('Size have to be a number, recieved undefined')
})

test('pass NaN', () => {
    expect(() => getIdentityMatrix(NaN)).toThrow('Size have to be a number, recieved NaN')
})

test('pass zero', () => {
    expect(() => getIdentityMatrix(0)).toThrow(`Size have to be positive integer, recieved 0`)
})

test('pass negative', () => {
    expect(() => getIdentityMatrix(-1)).toThrow(`Size have to be positive integer, recieved -1`)
})

test('pass float', () => {
    expect(() => getIdentityMatrix(2.65)).toThrow(`Size have to be positive integer, recieved 2.65`)
})

test('get idential matrix 1 by 1', () => {
    expect(getIdentityMatrix(1)).toStrictEqual([[1]])
})

test('get idential matrix 2 by 2', () => {
    expect(getIdentityMatrix(2)).toStrictEqual([[1, 0], [0, 1]])
})

test('get idential matrix 3 by 3', () => {
    expect(getIdentityMatrix(3)).toStrictEqual([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
})

test('get idential matrix 4.0 by 4.0', () => {
    expect(getIdentityMatrix(4.0)).toStrictEqual([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
})

test('get idential matrix 5 by 5', () => {
    expect(getIdentityMatrix(5)).toStrictEqual([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]])
})