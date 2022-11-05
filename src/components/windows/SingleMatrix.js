import React, { useEffect, useState } from 'react'

import { Matrix } from '../../matrix/Matrix'
import Input from '../input/Input'
import Background from './Background'

import './SingleMatrix.css'

const SingleMatrix = (props) => {
    const [matrix, setMatrix] = useState(Matrix.getZeroMatrix(3, 3))
    const [result, setResult] = useState(props.operation(matrix))

    useEffect(() => {
        setResult(props.operation(matrix))
    }, [matrix])

    return (
        <Background title={props.title}>
            <div className='single_matrix'>
                <div className='single_matrix-left'>
                    <Input
                        value={matrix}
                        onChange={(matrix) => setMatrix(matrix)}
                    />
                    <span className='single_matrix-left-span'>{props.span}</span>
                </div>
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

export default SingleMatrix