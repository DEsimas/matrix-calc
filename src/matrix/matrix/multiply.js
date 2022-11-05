import { isMatrix } from "../validation/isMatrix";
import { isMultiplicatable } from "../validation/isMultiplicatable";

export function multiply(a, b) {
    if (!isMatrix(a) || !isMatrix(b)) throw Error('Arguments have to be matrices')
    if (!isMultiplicatable(a, b)) throw Error('Number of columns in the first matrix should be the same as the number of rows in the second')
    let x = a.length,
        z = a[0].length,
        y = b[0].length;
    let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
        product[p] = productRow.slice();
    }
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            for (let k = 0; k < z; k++) {
                product[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return product;
}