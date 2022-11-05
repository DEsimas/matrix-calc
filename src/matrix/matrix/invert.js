import { adjugate } from "./adjugate"
import { determinant } from "./determinant"
import { isMatrix } from "../validation/isMatrix"
import { divideByNumber } from "./../number/divideByNumber"

export function invert(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (determinant(matrix) == 0) throw Error('Determinant can\'t be 0')
    return divideByNumber(adjugate(matrix), determinant(matrix));
}