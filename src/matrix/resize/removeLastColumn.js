export function removeLastColumn(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].pop()
    }
    return [...matrix]
}