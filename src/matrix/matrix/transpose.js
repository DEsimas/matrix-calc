import { isMatrix } from "../validation/isMatrix"

export function transpose(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
}