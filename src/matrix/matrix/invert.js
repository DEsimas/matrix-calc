import { adjugate } from "./adjugate"
import { determinant } from "./determinant"
import { divideByNumber } from "./../matrixByNumber/divideByNumber"

export function invert(matrix) {
    return divideByNumber(adjugate(matrix), determinant(matrix));
}