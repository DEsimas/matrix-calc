import { isNumber } from "./isNumber"

export function isMatrix(matrix) {
    if (!Array.isArray(matrix)) return false
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) return false
        for (let j = 0; j < matrix[i].length; j++) {
            if (!isNumber(matrix[i][j])) return false
        }
    }
    return true
}