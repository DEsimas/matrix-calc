import { isMatrix } from "./isMatrix";

export function isSquareMatrix(matrix) {
    return isMatrix(matrix) && matrix.length == matrix[0].length
}