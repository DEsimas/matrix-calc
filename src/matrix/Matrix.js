export function replace(matrix, row, column, value) {
    matrix[row][column] = value
    return [...matrix]
}

export function transpose(matrix) {
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
}

export function multiply(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
        throw new Error('arguments should be in 2-dimensional array format');
    }
    let x = a.length,
        z = a[0].length,
        y = b[0].length;
    if (b.length !== z) {
        throw new Error('number of columns in the first matrix should bethe same as the number of rows in the second');
    }
    let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
        product[p] = productRow.slice();
    }
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            for (let k = 0; k < z; k++) {
                product[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return product;
}

export function add(m1, m2) {
    const m = []
    for (let i = 0; i < m1.length; i++) {
        const v = []
        for (let j = 0; j < m1[i].length; j++) {
            v.push(m1[i][j] + m2[i][j])
        }
        m.push(v)
    }
    return m
}

export function subtract(m1, m2) {
    const m = []
    for (let i = 0; i < m1.length; i++) {
        const v = []
        for (let j = 0; j < m1[i].length; j++) {
            v.push(m1[i][j] - m2[i][j])
        }
        m.push(v)
    }
    return m
}