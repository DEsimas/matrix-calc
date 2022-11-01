import React, { useState } from 'react'
import { getZeroMatrix, replace } from '../Matrix'

const Input = (props) => {
    const [width, setWidth] = useState(props.width ?? 3)
    const [height, setWheight] = useState(props.height ?? 3)
    const [isFixed, setIsFixed] = useState(props.fixed ? true : false)
    const [onChange, setOnChange] = useState(props.onChange ?? function () { })
    const [matrix, setMatrix] = useState(props.default ?? getZeroMatrix(width, height))

    function getMatrixInputs() {
        console.log(matrix)
        return matrix.map((vector, row) => {
            return (
                <div key={row.toString()} className='row'>
                    {
                        vector.map((element, column) => {
                            return (
                                <input key={row.toString() + column.toString()} type={'number'} value={element} onChange={(e) => onValueChange(e.target.valueAsNumber, row, column)}></input>
                            )
                        })
                    }
                </div>
            )
        })
    }

    function onValueChange(value, row, column) {
        setMatrix(replace(matrix, row, column, value))
    }

    return (
        <div className='input'>
            <div className='control-row'></div>
            <div className='control-column'></div>
            <div className='matrix'>
                {getMatrixInputs()}
            </div>
        </div>
    )
}

export default Input