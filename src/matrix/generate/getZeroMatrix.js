import { getZeroVector } from "./getZeroVector"

export function getZeroMatrix(width, height) {
    const matrix = []
    for (let i = 0; i < height; i++) {
        matrix.push(getZeroVector(width))
    }
    return matrix
}