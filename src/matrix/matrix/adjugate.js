import { cofactor } from "./cofactor"
import { transpose } from "./transpose"
import { determinant } from "./determinant"
import { isMatrix } from "../validation/isMatrix"
import { isSquareMatrix } from "../validation/isSquareMatrix"

export function adjugate(matrix) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (!isSquareMatrix(matrix)) throw Error('Matrix have to be square')
    if (matrix.length == 1) throw Error('Matrix have to be larger than 1 by 1')
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