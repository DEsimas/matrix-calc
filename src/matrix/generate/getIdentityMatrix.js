import { getZeroMatrix } from "./getZeroMatrix"
import { isNumber } from "./../validation/isNumber"
import { isPositiveInteger } from "./../validation/isPositiveInteger"

export function getIdentityMatrix(size) {
    if (!isNumber(size)) throw Error(`Size have to be a number, recieved ${size}`)
    if (!isPositiveInteger(size)) throw Error(`Size have to be positive integer, recieved ${size}`)
    const matrix = getZeroMatrix(size, size)
    for (let i = 0; i < size; i++) {
        matrix[i][i] = 1
    }
    return matrix
}