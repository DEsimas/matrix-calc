import { isMatrix } from "./isMatrix"

export function isMultiplicatable(matrix1, matrix2) {
    if (!isMatrix(matrix1) || !isMatrix(matrix2)) return false
    return matrix1[0].length == matrix2.length
}