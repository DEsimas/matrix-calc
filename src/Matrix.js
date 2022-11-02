export function getZeroMatrix(width, height) {
    const matrix = []
    for (let i = 0; i < height; i++) {
        matrix.push([])
        for (let j = 0; j < width; j++) {
            matrix[i].push(0)
        }
    }
    return matrix
}

export function getZeroVector(n) {
    const vec = []
    for (let i = 0; i < n; i++)
        vec.push(0)
    return vec
}

export function replace(matrix, row, column, value) {
    matrix[row][column] = value
    return [...matrix]
}

export function addZeroColumn(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].push(0)
    }
    return [...matrix]
}

export function removeLastColumn(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].pop()
    }
    return [...matrix]
}

export function addZeroRow(matrix) {
    matrix.push(getZeroVector(matrix[0].length))
    return [...matrix]
}

export function removeLastRow(matrix) {
    matrix.pop()
    return [...matrix]
}

export function transpose(matrix) {
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
}