import { multiply } from "../../matrix/matrix/multiply"

test('wrong first matrix', () => {
    expect(() => multiply()).toThrow('Arguments have to be matrices')
})

test('wrong second matrix', () => {
    expect(() => multiply([[5]])).toThrow('Arguments have to be matrices')
})

test('wrong matrices 1', () => {
    expect(() => multiply([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]])).toThrow('Number of columns in the first matrix should be the same as the number of rows in the second')
})

test('wrong matrices 2', () => {
    expect(() => multiply([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6]])).toThrow('Number of columns in the first matrix should be the same as the number of rows in the second')
})

test('multiply 1', () => {
    expect(multiply([[9]], [[8]])).toStrictEqual([[72]])
})

test('multiply 2', () => {
    expect(multiply([[9]], [[8, 6, 5, 2]])).toStrictEqual([[72, 54, 45, 18]])
})

test('multiply 3', () => {
    expect(multiply([[9, 5]], [[8, 6, 6, 6], [1, 2, 3, 4]])).toStrictEqual([[77, 64, 69, 74]])
})

test('multiply 4', () => {
    expect(multiply([[9, 5], [8, 6]], [[8, 6, 6, 6], [1, 2, 3, 4]])).toStrictEqual([[77, 64, 69, 74], [70, 60, 66, 72]])
})

test('multiply 5', () => {
    expect(multiply([[9, 5], [8, 6]], [[8, 6], [1, 2]])).toStrictEqual([[77, 64], [70, 60]])
})

test('multiply 6', () => {
    expect(multiply([[9, 5, 5, 89], [2, 65, 8, 2], [1, 25, 8, 3], [32, 54, 68, 8]], [[8], [1], [6], [3]])).toStrictEqual([[374], [135], [90], [742]])
})