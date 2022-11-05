import { isMatrix } from "../validation/isMatrix"
import { isNumber } from "../validation/isNumber"

export function addNumber(matrix, number) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (!isNumber(number)) throw Error('Second argument have to be number')
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        const vector = []
        for (let j = 0; j < matrix[i].length; j++) {
            vector.push(matrix[i][j] + number)
        }
        res.push(vector)
    }
    return res
}