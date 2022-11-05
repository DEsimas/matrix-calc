import { isMatrix } from "./../validation/isMatrix"
import { getZeroVector } from "./../generate/getZeroVector"

export function addZeroRow(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    matrix.push(getZeroVector(matrix[0].length))
    return [...matrix]
}