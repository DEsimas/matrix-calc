import { isMatrix } from "./../validation/isMatrix"

export function addZeroColumn(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].push(0)
    }
    return [...matrix]
}