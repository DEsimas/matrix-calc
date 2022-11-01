import React, { useEffect, useState } from 'react'
import { getZeroMatrix, transpose } from '../Matrix'
import Input from './Input'
import './Transpose.css'

const Transpose = () => {
    const [matrix1, setMatrix1] = useState(getZeroMatrix(3, 3))
    const [matrix2, setMatrix2] = useState(getZeroMatrix(3, 3))

    return (
        <div className='transpose'>
            <h2 className='transpose-header'>Transpose</h2>
            <div className='transpose-desktop'>
                <div className='transpose-input'>
                    <Input value={matrix1} onChange={(matrix) => {
                        setMatrix2(transpose(matrix))
                    }} />
                    <span className='transpose-span'>T</span>
                </div>
                <span>=</span>
                <Input value={matrix2} onChange={(matrix) => {
                    setMatrix1(transpose(matrix))
                }} />
            </div>
        </div>
    )
}

export default Transpose