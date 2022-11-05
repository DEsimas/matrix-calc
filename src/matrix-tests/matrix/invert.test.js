import { invert } from "../../matrix/matrix/invert"

test('undefined matrix', () => {
    expect(() => invert()).toThrow('Matrix have to be passed')
})

test('invert 1', () => {
    expect(invert([[3, 4], [5, 7]])).toStrictEqual([[7, -4], [-5, 3]])
})

test('invert 2', () => {
    expect(invert([[2, 5, 7], [6, 3, 4], [5, -2, -3]])).toStrictEqual([[1, -1, 1], [-38, 41, -34], [27, -29, 24]])
})

test('invert 3', () => {
    expect(invert([[2, 1, 0, 0], [3, 2, 0, 0], [1, 1, 3, 4], [2, -1, 2, 3]])).toStrictEqual([[2, -1, 0, 0], [-3, 2, 0, 0], [31, -19, 3, -4], [-23, 14, -2, 3]])
})

test('invert 4', () => {
    expect(invert([[1, 2, 0], [0, 3, 1], [0, 1, 2]])).toStrictEqual([[1, -0.8, 0.4], [0, 0.4, -0.2], [0, -0.2, 0.6]])
})