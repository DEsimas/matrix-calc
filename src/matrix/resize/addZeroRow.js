export function addZeroRow(matrix) {
    matrix.push(getZeroVector(matrix[0].length))
    return [...matrix]
}