import { getZeroVector } from "./getZeroVector"
import { isNumber } from "./../validation/isNumber"

export function getZeroMatrix(width, height) {
    if (!isNumber(width)) throw Error(`Size have to be a number, recieved ${width}`)
    if (!isNumber(height)) throw Error(`Size have to be a number, recieved ${height}`)
    const matrix = []
    for (let i = 0; i < height; i++) {
        matrix.push(getZeroVector(width))
    }
    return matrix
}