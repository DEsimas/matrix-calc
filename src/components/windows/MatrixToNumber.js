import React, { useEffect, useState } from 'react'

import Input from '../input/Input'
import Background from './Background'
import { Matrix } from '../../matrix/Matrix'

const MatrixToNumber = (props) => {
    const [matrix, setMatrix] = useState(Matrix.getZeroMatrix(3, 3))
    const [result, setResult] = useState(Matrix.getZeroMatrix(3, 3))

    useEffect(() => {
        try {
            setResult(props.operation(matrix))
        } catch (e) {
            setResult(e.message)
        }
    }, [matrix])

    return (
        <Background title={props.title}>
            <div className='matrix_number'>
                <span className='matrix_number-span'>{props.span}</span>
                <Input
                    value={matrix}
                    onChange={(matrix) => setMatrix(matrix)}
                />
                <span>=</span>
                <span>{result}</span>
            </div>
        </Background>
    )
}

export default MatrixToNumber