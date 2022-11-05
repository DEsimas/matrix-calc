import { isNumber } from "./../validation/isNumber"
import { isPositiveInteger } from "./../validation/isPositiveInteger"

export function getZeroVector(length) {
    if (!isNumber(length)) throw Error(`Length have to be a number, recieved ${length}`)
    if (!isPositiveInteger(length)) throw Error(`Length have to be positive integer, recieved ${length}`)
    const vec = []
    for (let i = 0; i < length; i++)
        vec.push(0)
    return vec
}