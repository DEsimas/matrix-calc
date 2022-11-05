import { adjugate } from "../../matrix/matrix/adjugate"

test('pass not matrix', () => {
    expect(() => adjugate()).toThrow('Matrix have to be passed')
})

test('pass not sqare matrix', () => {
    expect(() => adjugate([[1, 2, 3], [4, 5, 6]])).toThrow('Matrix have to be square')
})

test('adjugate matrix 2 by 2', () => {
    expect(adjugate([[3, 6], [-4, 8]])).toStrictEqual([[8, -6], [4, 3]])
})

test('adjugate matrix 3 by 3', () => {
    expect(adjugate([[-3, 2, -5], [-1, 0, -2], [3, -4, 1]])).toStrictEqual([[-8, 18, -4], [-5, 12, -1], [4, -6, 2]])
})