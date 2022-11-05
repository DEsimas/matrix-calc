import { isMatrix } from "./../../matrix/validation/isMatrix"

export function add(matrix1, matrix2) {
    if (!isMatrix(matrix1) || !isMatrix(matrix2)) throw Error('Matrix have to be passed')
    if (!(matrix1.length == matrix2.length && matrix1[0].length == matrix1[0].length)) throw Error('Size of matrices have to be same')
    const matrix = []
    for (let i = 0; i < matrix1.length; i++) {
        const vecotr = []
        for (let j = 0; j < matrix1[i].length; j++) {
            vecotr.push(matrix1[i][j] + matrix2[i][j])
        }
        matrix.push(vecotr)
    }
    return matrix
}