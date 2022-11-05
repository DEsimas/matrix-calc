import { isMatrix } from "./../validation/isMatrix"

export function removeLastRow(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (matrix.length <= 1) throw Error('Matrix have only one row')
    matrix.pop()
    return [...matrix]
}