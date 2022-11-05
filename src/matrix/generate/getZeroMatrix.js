import { getZeroVector } from "./getZeroVector"
import { isNumber } from "./../validation/isNumber"
import { isPositiveInteger } from "./../validation/isPositiveInteger"

export function getZeroMatrix(height, width) {
    if (!isNumber(height)) throw Error(`Height have to be a number, recieved ${height}`)
    if (!isPositiveInteger(height)) throw Error(`Height have to be positive integer, recieved ${height}`)
    if (!isNumber(width)) throw Error(`Width have to be a number, recieved ${width}`)
    if (!isPositiveInteger(width)) throw Error(`Width have to be positive integer, recieved ${width}`)
    const matrix = []
    for (let i = 0; i < height; i++) {
        matrix.push(getZeroVector(width))
    }
    return matrix
}