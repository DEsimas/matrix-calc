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
                <div className='double_matrix-mid'>
                    <span className='double_matrix-span'>{props.span}</span>
                    <svg
                        onClick={() => {
                            const t = matrix1
                            setMatrix1(matrix2)
                            setMatrix2(t)
                        }}
                        xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
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