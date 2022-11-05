import { getZeroVector } from "./../../matrix/generate/getZeroVector"

test('pass string', () => {
    expect(() => getZeroVector('hello')).toThrow('Length have to be a number, recieved hello')
})

test('pass object', () => {
    expect(() => getZeroVector({ size: 3 })).toThrow('Length have to be a number, recieved [object Object]')
})

test('pass undefined', () => {
    expect(() => getZeroVector()).toThrow('Length have to be a number, recieved undefined')
})

test('pass NaN', () => {
    expect(() => getZeroVector(NaN)).toThrow('Length have to be a number, recieved NaN')
})

test('pass zero', () => {
    expect(() => getZeroVector(0)).toThrow(`Length have to be positive integer, recieved 0`)
})

test('pass negative', () => {
    expect(() => getZeroVector(-1)).toThrow(`Length have to be positive integer, recieved -1`)
})

test('pass 1', () => {
    expect(getZeroVector(1)).toStrictEqual([0])
})

test('pass 2.0', () => {
    expect(getZeroVector(2.0)).toStrictEqual([0, 0])
})

test('pass 3', () => {
    expect(getZeroVector(3)).toStrictEqual([0, 0, 0])
})

test('pass 4', () => {
    expect(getZeroVector(4)).toStrictEqual([0, 0, 0, 0])
})

test('pass 5', () => {
    expect(getZeroVector(5)).toStrictEqual([0, 0, 0, 0, 0])
})