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

export function replace(matrix, row, column, value) {
    matrix[row][column] = value
    return matrix
}