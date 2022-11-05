export function addZeroColumn(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].push(0)
    }
    return [...matrix]
}