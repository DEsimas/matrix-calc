import { getIdentityMatrix } from "./generate/getIdentityMatrix"
import { getZeroMatrix } from "./generate/getZeroMatrix"
import { getZeroVector } from "./generate/getZeroVector"
import { add } from "./matrix/add"
import { multiply } from "./matrix/multiply"
import { subtract } from "./matrix/subtract"
import { transpose } from "./matrix/transpose"
import { addZeroColumn } from "./resize/addZeroColumn"
import { addZeroRow } from "./resize/addZeroRow"
import { removeLastColumn } from "./resize/removeLastColumn"
import { removeLastRow } from "./resize/removeLastRow"

export class Matrix {
    static getIdentityMatrix = getIdentityMatrix
    static getZeroMatrix = getZeroMatrix
    static getZeroVector = getZeroVector
    static add = add
    static multiply = multiply
    static subtract = subtract
    static transpose = transpose
    static addZeroColumn = addZeroColumn
    static addZeroRow = addZeroRow
    static removeLastColumn = removeLastColumn
    static removeLastRow = removeLastRow
}