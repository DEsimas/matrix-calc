import { cofactor } from "../../matrix/matrix/cofactor"

test('pass not matrix', () => {
    expect(() => cofactor()).toThrow('Matrix have to be passed')
})

test('pass wrong matrix', () => {
    expect(() => cofactor([[5]], 1, 1)).toThrow('Matrix have to be larger than 1 by 1')
})

test('pass string i', () => {
    expect(() => cofactor([[5, 5], [5, 5]], 'uwu', 1)).toThrow('i and j have to be not negative integers')
})

test('pass negative i', () => {
    expect(() => cofactor([[5, 5], [5, 5]], -1, 1)).toThrow('i and j have to be not negative integers')
})

test('pass not integer i', () => {
    expect(() => cofactor([[5, 5], [5, 5]], 5.6, 1)).toThrow('i and j have to be not negative integers')
})

test('pass string j', () => {
    expect(() => cofactor([[5, 5], [5, 5]], 1, 'uwu')).toThrow('i and j have to be not negative integers')
})

test('pass negative j', () => {
    expect(() => cofactor([[5, 5], [5, 5]], 1, -1)).toThrow('i and j have to be not negative integers')
})

test('pass not integer j', () => {
    expect(() => cofactor([[5, 5], [5, 5]], 1, 5.6)).toThrow('i and j have to be not negative integers')
})

test('matrix 1', () => {
    expect(cofactor([[-4, 7], [-11, 9]], 0, 0)).toStrictEqual([[9]])
})

test('matrix 2', () => {
    expect(cofactor([[-4, 7], [-11, 9]], 1, 0)).toStrictEqual([[7]])
})

test('matrix 3', () => {
    expect(cofactor([[-4, 7], [-11, 9]], 0, 1)).toStrictEqual([[-11]])
})

test('matrix 4', () => {
    expect(cofactor([[-4, 7], [-11, 9]], 1, 1)).toStrictEqual([[-4]])
})

test('matrix 5', () => {
    expect(cofactor([[-4, 7, 8], [-11, 9, 3]], 1, 1)).toStrictEqual([[-4, 8]])
})

test('matrix 6', () => {
    expect(cofactor([[-4, 7, 8], [-11, 9, 3], [1, 2, 3]], 0, 2)).toStrictEqual([[-11, 9], [1, 2]])
})

test('matrix 7', () => {
    expect(cofactor([[-4, 7, 8], [-11, 9, 3], [1, 2, 3]], 0, 0)).toStrictEqual([[9, 3], [2, 3]])
})

test('matrix 8', () => {
    expect(cofactor([[-4, 7, 8, -6], [-11, 9, 3, -3], [1, 2, 3, -5]], 0, 0)).toStrictEqual([[9, 3, -3], [2, 3, -5]])
})

test('matrix 9', () => {
    expect(cofactor([[-4, 7, 8, -6], [-11, 9, 3, -3], [1, 2, 3, -5], [12, 13, 14, 15]], 1, 2)).toStrictEqual([[-4, 7, -6], [1, 2, -5], [12, 13, 15]])
})

test('matrix 10', () => {
    expect(cofactor([[-4, 7, 8, -6], [-11, 9, 3, -3], [1, 2, 3, -5], [12, 13, 14, 15]], 3, 3)).toStrictEqual([[-4, 7, 8], [-11, 9, 3], [1, 2, 3]])
})