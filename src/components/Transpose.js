import React, { useEffect, useState } from 'react'
import { getZeroMatrix, transpose } from '../Matrix'
import Input from './Input'

const Transpose = () => {
    const [matrix1, setMatrix1] = useState(getZeroMatrix(3, 3))
    const [matrix2, setMatrix2] = useState(getZeroMatrix(3, 3))

    return (
        <div className='transpose'>
            <h2>Transpose</h2>
            <div className='transpose-input'>
                <Input value={matrix1} onChange={(matrix) => {
                    setMatrix2(transpose(matrix))
                }} />
            </div>
            <span>T</span>
            <span>=</span>
            <Input value={matrix2} onChange={(matrix) => {
                setMatrix1(transpose(matrix))
            }} />
        </div>
    )
}

export default Transpose