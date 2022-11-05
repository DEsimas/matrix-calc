import React, { useState, useEffect } from 'react'

import { Matrix } from '../../matrix/Matrix'
import Background from './Background'
import Input from '../input/Input'

import './DoubleMatrix.css'

const DoubleMatrix = (props) => {
    const [matrix1, setMatrix1] = useState(Matrix.getZeroMatrix(3, 3))
    const [matrix2, setMatrix2] = useState(Matrix.getZeroMatrix(3, 3))
    const [result, setResult] = useState(Matrix.getZeroMatrix(3, 3))

    useEffect(() => {
        try {
            setResult(props.operation(matrix1, matrix2))
        } catch (e) {
            setResult(e.message)
        }
    }, [matrix1, matrix2])

    return (
        <Background title={props.title}>
            <div className='double_matrix'>
                <Input
                    value={matrix1}
                    onChange={(matrix) => setMatrix1(matrix)}
                />
                <span className='double_matrix-span'>{props.span}</span>
                <Input
                    value={matrix2}
                    onChange={(matrix) => setMatrix2(matrix)}
                />
                <span>=</span>
                <Input
                    disabled={true}
                    value={result}
                    onChange={(result) => setResult(result)}
                />
            </div>
        </Background>
    )
}

export default DoubleMatrix