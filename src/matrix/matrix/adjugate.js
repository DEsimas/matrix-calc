import { transpose } from "./transpose"
import { determinant } from "./determinant"
import { cofactor } from "./cofactor"

export function adjugate(matrix) {
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        const vector = []
        for (let j = 0; j < matrix[i].length; j++) {
            vector.push(determinant(cofactor(matrix, i, j)) * Math.pow(-1, i + j))
        }
        res.push(vector)
    }
    return transpose(res)
}