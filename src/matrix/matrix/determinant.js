export function determinant(m) {
    return m.length == 1 ?
        m[0][0] :
        m.length == 2 ?
            m[0][0] * m[1][1] - m[0][1] * m[1][0] :
            m[0].reduce((r, e, i) =>
                r + (-1) ** (i + 2) * e * determinant(m.slice(1).map(c =>
                    c.filter((_, j) => i != j))), 0)
}