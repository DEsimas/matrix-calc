import { isMatrix } from "../validation/isMatrix"
import { isNumber } from "../validation/isNumber"

export function divideByNumber(matrix, number) {
    if (!isMatrix(matrix)) throw Error('Matrix have to be passed')
    if (!isNumber(number)) throw Error('Second argument have to be number')
    if (number == 0) throw Error('Can\'t divide by 0')
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        const vector = []
        for (let j = 0; j < matrix[i].length; j++) {
            vector.push(matrix[i][j] / number)
        }
        res.push(vector)
    }
    return res
}