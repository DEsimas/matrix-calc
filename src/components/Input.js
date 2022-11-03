import React, { useState } from 'react'

import { addZeroColumn, addZeroRow, getZeroMatrix, removeLastColumn, removeLastRow, replace } from './../Matrix'

import './Input.css'

const Input = (props) => {
    const [matrix, setMatrix] = useState(props.value ?? getZeroMatrix(3, 3))

    function getMatrixInputs() {
        return matrix.map((vector, row) => {
            return (
                <div key={row.toString()} className='matrix-row'>
                    {
                        vector.map((element, column) => {
                            return (
                                <input
                                    className='matrix-row-input'
                                    disabled={props.disabled}
                                    key={row.toString() + column.toString()}
                                    type={'number'}
                                    value={element}
                                    onChange={(e) => onValueChange(e.target.value == '' ? '' : e.target.valueAsNumber, row, column)}
                                    onMouseDown={(e) => e.stopPropagation()} />
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

    function decreaseColumns(e) {
        e.stopPropagation()
        setMatrix(removeLastColumn(matrix))
        if (typeof props.onChange == 'function') props.onChange(matrix)
        if (typeof props.onDecreaseColumns == 'function') props.onDecreaseColumns(matrix)
    }

    function increaseColumns(e) {
        e.stopPropagation()
        setMatrix(addZeroColumn(matrix))
        if (typeof props.onChange == 'function') props.onChange(matrix)
        if (typeof props.onIncreaseColumns == 'function') props.onIncreaseColumns(matrix)
    }

    function decreaseRows(e) {
        e.stopPropagation()
        setMatrix(removeLastRow(matrix))
        if (typeof props.onChange == 'function') props.onChange(matrix)
        if (typeof props.onIncreaseColumns == 'function') props.onDecreaseRows(matrix)
    }

    function increaseRows(e) {
        e.stopPropagation()
        setMatrix(addZeroRow(matrix))
        if (typeof props.onChange == 'function') props.onChange(matrix)
        if (typeof props.onIncreaseColumns == 'function') props.onIncreaseRows(matrix)
    }

    return (
        <div className='matrix-input'>
            <div className='matrix-input-control-column'>
                <button
                    className='matrix-input-control-column-button'
                    disabled={props.fixColumns || props.disabled || props.fixed || matrix[0].length == (props.min ?? 1)}
                    onClick={decreaseColumns}>-</button>
                <button
                    className='matrix-input-control-column-button'
                    disabled={props.fixColumns || props.disabled || props.fixed || matrix[0].length >= (props.max ?? 15)}
                    onClick={increaseColumns}>+</button>
            </div>
            <div className='matrix-input-bottom-section'>
                <div className='matrix-input-bottom-section-control-row'>
                    <button
                        className='matrix-input-bottom-section-control-row-button'
                        disabled={props.fixRows || props.disabled || props.fixed || matrix.length == (props.min ?? 1)}
                        onClick={decreaseRows}>-</button>
                    <button
                        className='matrix-input-bottom-section-control-row-button'
                        disabled={props.fixRows || props.disabled || props.fixed || matrix.length >= (props.max ?? 15)}
                        onClick={increaseRows}>+</button>
                </div>
                <div className='matrix-input-bottom-section-matrix'>
                    {getMatrixInputs()}
                </div>
            </div>
        </div>
    )
}

export default Input