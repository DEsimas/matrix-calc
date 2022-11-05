import { adjugate } from "./adjugate"
import { determinant } from "./determinant"
import { isMatrix } from "../validation/isMatrix"
import { divideByNumber } from "./../matrixByNumber/divideByNumber"

export function invert(matrix) {
    if (!isMatrix(m)) throw Error('Matrix have to be passed')
    return divideByNumber(adjugate(matrix), determinant(matrix));
}