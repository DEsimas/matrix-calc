import React, { useState } from 'react'
import { addZeroColumn, getZeroMatrix, removeLastColumn, replace } from '../Matrix'

const Input = (props) => {
    const [width, setWidth] = useState(props.width ?? 3)
    const [height, setWheight] = useState(props.height ?? 3)
    const [isFixed, setIsFixed] = useState(props.fixed ? true : false)
    const [matrix, setMatrix] = useState(props.default ?? getZeroMatrix(width, height))

    function getMatrixInputs() {
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
        if (props.onChange) props.onChange(matrix)
    }

    return (
        <div className='input'>
            <div className='control-column'>
                <button disabled={matrix[0].length == 1} onClick={() => setMatrix(removeLastColumn(matrix))}>-</button>
                <button disabled={matrix[0].length >= 20} onClick={() => setMatrix(addZeroColumn(matrix))}>+</button>
            </div>
            <div className='control-row'>
                <button>+</button>
                <button>-</button>
            </div>
            <div className='matrix'>
                {getMatrixInputs()}
            </div>
        </div>
    )
}

export default Input