export function add(matrix1, matrix2) {
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