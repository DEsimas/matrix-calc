import { getZeroMatrix } from "./getZeroMatrix"

export function getIdentityMatrix(size) {
    const matrix = getZeroMatrix(size, size)
    for (let i = 0; i < size; i++) {
        matrix[size][size] = 1
    }
    return matrix
}