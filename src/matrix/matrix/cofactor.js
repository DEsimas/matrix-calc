export function cofactor(matrix, i, j) {
    const m = matrix.filter((mtr, index) => (index != i))
    for (let k = 0; k < m.length; k++) {
        m[k] = m[k].filter((mtr, index) => (index != j))
    }
    return m
}