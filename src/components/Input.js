import React, { useEffect, useState } from 'react'
import { addZeroColumn, addZeroRow, getZeroMatrix, removeLastColumn, removeLastRow, replace } from '../Matrix'
import './Input.css'

const Input = (props) => {
    const [matrix, setMatrix] = useState(props.value ?? getZeroMatrix(props.width ?? 3, props.height ?? 3))

    useEffect(() => {
        setMatrix(props.value ?? getZeroMatrix(props.width ?? 3, props.height ?? 3))
    })

    function getMatrixInputs() {
        return matrix.map((vector, row) => {
            return (
                <div key={row.toString()} className='row'>
                    {
                        vector.map((element, column) => {
                            return (
                                <input
                                    disabled={props.disabled}
                                    key={row.toString() + column.toString()}
                                    type={'number'}
                                    value={element}
                                    onChange={(e) => onValueChange(e.target.value == '' ? '' : e.target.valueAsNumber, row, column)}
                                    onMouseDown={(e) => e.stopPropagation()}></input>
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
                <button disabled={props.fixColumns || props.disabled || props.fixed || matrix[0].length == (props.min ?? 1)} onClick={(e) => {
                    e.stopPropagation()
                    setMatrix(removeLastColumn(matrix))
                    if (props.onChange) props.onChange(matrix)
                }}>-</button>
                <button disabled={props.fixColumns || props.disabled || props.fixed || matrix[0].length >= (props.max ?? 20)} onClick={(e) => {
                    e.stopPropagation()
                    setMatrix(addZeroColumn(matrix))
                    if (props.onChange) props.onChange(matrix)
                }}>+</button>
            </div>
            <div className='bottom-section'>
                <div className='control-row'>
                    <button disabled={props.fixRows || props.disabled || props.fixed || matrix.length == (props.min ?? 1)} onClick={(e) => {
                        e.stopPropagation()
                        setMatrix(removeLastRow(matrix))
                        if (props.onChange) props.onChange(matrix)
                    }}>-</button>
                    <button disabled={props.fixRows || props.disabled || props.fixed || matrix.length >= (props.max ?? 20)} onClick={(e) => {
                        e.stopPropagation()
                        setMatrix(addZeroRow(matrix))
                        if (props.onChange) props.onChange(matrix)
                    }}>+</button>
                </div>
                <div className='matrix'>
                    {getMatrixInputs()}
                </div>
            </div>
        </div>
    )
}

export default Input