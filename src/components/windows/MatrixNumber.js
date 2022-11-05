import React, { useState, useEffect } from 'react'

import { Matrix } from '../../matrix/Matrix'
import Background from './Background'
import Input from '../input/Input'

import './MatrixNumber.css'

const MatrixNumber = (props) => {
    const [matrix, setMatrix] = useState(Matrix.getZeroMatrix(3, 3))
    const [number, setNumber] = useState(0)
    const [result, setResult] = useState(Matrix.getZeroMatrix(3, 3))

    useEffect(() => {
        try {
            setResult(props.operation(matrix, number))
        } catch (e) {
            setResult(e.message)
        }
    }, [matrix, number])

    return (
        <Background title={props.title}>
            <div className='matrix_number'>
                <Input
                    value={matrix}
                    onChange={(matrix) => setMatrix(matrix)}
                />
                <span className='matrix_number-span'>{props.span}</span>
                <input className='matrix_number-input' type={'number'} value={number} onChange={(e) => setNumber(e.target.valueAsNumber)} />
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

export default MatrixNumber