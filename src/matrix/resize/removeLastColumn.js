import { isMatrix } from "./../validation/isMatrix"

export function removeLastColumn(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (matrix[0].length <= 1) throw Error('Matrix have only one column')
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].pop()
    }
    return [...matrix]
}