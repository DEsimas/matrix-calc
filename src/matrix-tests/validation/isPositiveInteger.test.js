import { isPositiveInteger } from "./../../matrix/validation/isPositiveInteger"

test('value: 54', () => {
    expect(isPositiveInteger(54)).toBe(true)
})

test('value: -50', () => {
    expect(isPositiveInteger(-50)).toBe(false)
})

test('value: -1', () => {
    expect(isPositiveInteger(-1)).toBe(false)
})

test('value: -1.5', () => {
    expect(isPositiveInteger(-1.5)).toBe(false)
})

test('value: 0', () => {
    expect(isPositiveInteger(0)).toBe(false)
})

test('value: 1', () => {
    expect(isPositiveInteger(1)).toBe(true)
})

test('value: 1.65', () => {
    expect(isPositiveInteger(1.65)).toBe(false)
})

test('value: 95955', () => {
    expect(isPositiveInteger(95955)).toBe(true)
})