import { isMultiplicatable } from "../../matrix/validation/isMultiplicatable"

test('not matrices 1', () => {
    expect(isMultiplicatable()).toBe(false)
})

test('not matrices 2', () => {
    expect(isMultiplicatable([[]], [[0]])).toBe(false)
})

test('not matrices 3', () => {
    expect(isMultiplicatable('abc', '123')).toBe(false)
})

test('not multiplicatable matrices 1', () => {
    expect(isMultiplicatable([[1, 0, 1], [2, 3, 4]], [[1, 1, 3], [2, 2, 3]])).toBe(false)
})

test('not multiplicatable matrices 2', () => {
    expect(isMultiplicatable([[1]], [[2, 3], [1, 2]])).toBe(false)
})

test('multiplicatable matrices 1', () => {
    expect(isMultiplicatable([[1]], [[2]])).toBe(true)
})

test('multiplicatable matrices 2', () => {
    expect(isMultiplicatable([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 4], [5, 6]])).toBe(true)
})

test('multiplicatable matrices 3', () => {
    expect(isMultiplicatable([[1, 2], [4, 5]], [[1, 2], [3, 4]])).toBe(true)
})