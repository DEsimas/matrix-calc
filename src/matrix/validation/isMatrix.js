import { isNumber } from "./isNumber"

export function isMatrix(matrix) {
    if (!Array.isArray(matrix)) return false
    const width = matrix[0].length
    if (width <= 0 || width == undefined) return false
    if (matrix.length <= 0 || matrix.length == undefined) return false
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) return false
        if (matrix[i].length != width) return false
        for (let j = 0; j < matrix[i].length; j++) {
            if (!isNumber(matrix[i][j])) return false
        }
    }
    return true
}