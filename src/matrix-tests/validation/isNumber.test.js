import { isNumber } from "../../matrix/validation/isNumber"

test('undefined', () => {
    expect(isNumber()).toBe(false)
})

test('string', () => {
    expect(isNumber('hello')).toBe(false)
})

test('object', () => {
    expect(isNumber({ size: 32 })).toBe(false)
})

test('NaN', () => {
    expect(isNumber(NaN)).toBe(false)
})

test('\'5\'', () => {
    expect(isNumber('5')).toBe(false)
})

test('value: 54', () => {
    expect(isNumber(54)).toBe(true)
})

test('value: -50', () => {
    expect(isNumber(-50)).toBe(true)
})

test('value: -1', () => {
    expect(isNumber(-1)).toBe(true)
})

test('value: -1.5', () => {
    expect(isNumber(-1.5)).toBe(true)
})

test('value: 0', () => {
    expect(isNumber(0)).toBe(true)
})

test('value: 1', () => {
    expect(isNumber(1)).toBe(true)
})

test('value: 1.65', () => {
    expect(isNumber(1.65)).toBe(true)
})

test('value: 95955', () => {
    expect(isNumber(95955)).toBe(true)
})