import { getIdentityMatrix } from "./generate/getIdentityMatrix"
import { getZeroMatrix } from "./generate/getZeroMatrix"
import { getZeroVector } from "./generate/getZeroVector"
import { add } from "./matrix/add"
import { adjugate } from "./matrix/adjugate"
import { cofactor } from "./matrix/cofactor"
import { determinant } from "./matrix/determinant"
import { invert } from "./matrix/invert"
import { multiply } from "./matrix/multiply"
import { subtract } from "./matrix/subtract"
import { transpose } from "./matrix/transpose"
import { addZeroColumn } from "./resize/addZeroColumn"
import { addZeroRow } from "./resize/addZeroRow"
import { removeLastColumn } from "./resize/removeLastColumn"
import { removeLastRow } from "./resize/removeLastRow"
import { isMatrix } from "./validation/isMatrix"
import { isMultiplicatable } from "./validation/isMultiplicatable"
import { isNumber } from "./validation/isNumber"
import { isSquareMatrix } from "./validation/isSquareMatrix"

export class Matrix {
    static getIdentityMatrix = getIdentityMatrix
    static getZeroMatrix = getZeroMatrix
    static getZeroVector = getZeroVector
    static add = add
    static adjugate = adjugate
    static cofactor = cofactor
    static determinant = determinant
    static invert = invert
    static multiply = multiply
    static subtract = subtract
    static transpose = transpose
    static addZeroColumn = addZeroColumn
    static addZeroRow = addZeroRow
    static removeLastColumn = removeLastColumn
    static removeLastRow = removeLastRow
    static isMatrix = isMatrix
    static isMultiplicatable = isMultiplicatable
    static isNumber = isNumber
    static isSquareMatrix = isSquareMatrix
}