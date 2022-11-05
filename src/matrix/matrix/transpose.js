export function transpose(matrix) {
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
}