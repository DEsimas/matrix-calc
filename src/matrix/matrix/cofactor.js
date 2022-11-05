import { isMatrix } from "../validation/isMatrix"
import { isNumber } from "../validation/isNumber"

export function cofactor(matrix, i, j) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (!isNumber(i) || i < 0 || Math.floor(i) != i || !isNumber(j) || j < 0 || Math.floor(j) != j) throw Error('i and j have to be not negative integers')
    if (matrix.length <= 1 || matrix[0].length <= 1) throw Error('Matrix have to be larger than 1 by 1')
    const m = matrix.filter((mtr, index) => (index != i))
    for (let k = 0; k < m.length; k++) {
        m[k] = m[k].filter((mtr, index) => (index != j))
    }
    return m
}