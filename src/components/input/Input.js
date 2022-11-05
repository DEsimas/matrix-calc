import React from 'react'

import { Matrix } from './../../matrix/Matrix'

import './Input.css'
/*Props
value
disabled
fixed
fixColumns
fixRows
onChange
onDecreaseColumns
onIncreaseColumns
onDecreaseRows
onIncreaseRows
min
max
*/
const Input = (props) => {
    let matrix = props.value

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
        matrix[row][column] = value
        if (props.onChange) props.onChange([...matrix])
    }

    function decreaseColumns(e) {
        e.stopPropagation()
        matrix = Matrix.removeLastColumn(matrix)
        if (typeof props.onChange == 'function') props.onChange([...matrix])
        if (typeof props.onDecreaseColumns == 'function') props.onDecreaseColumns([...matrix])
    }

    function increaseColumns(e) {
        e.stopPropagation()
        matrix = Matrix.addZeroColumn(matrix)
        if (typeof props.onChange == 'function') props.onChange([...matrix])
        if (typeof props.onIncreaseColumns == 'function') props.onIncreaseColumns([...matrix])
    }

    function decreaseRows(e) {
        e.stopPropagation()
        matrix = Matrix.removeLastRow(matrix)
        if (typeof props.onChange == 'function') props.onChange([...matrix])
        if (typeof props.onDecreaseRows == 'function') props.onDecreaseRows([...matrix])
    }

    function increaseRows(e) {
        e.stopPropagation()
        matrix = Matrix.addZeroRow(matrix)
        if (typeof props.onChange == 'function') props.onChange([...matrix])
        if (typeof props.onIncreaseRows == 'function') props.onIncreaseRows([...matrix])
    }

    if (typeof props.value == 'string') return (
        <div className='matrix-input'><span className='matrix-input-error'>{props.value}</span></div>
    )

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