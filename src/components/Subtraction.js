import React, { useState, useEffect } from 'react'
import { v1 } from 'uuid'
import Draggable from 'react-draggable'

import { add, getZeroMatrix, addZeroColumn, addZeroRow, removeLastColumn, removeLastRow } from '../Matrix'
import Input from './Input'

import './Subtraction.css'

const Subtraction = (props) => {
    const [matrix1, setMatrix1] = useState(getZeroMatrix(3, 3))
    const [matrix2, setMatrix2] = useState(getZeroMatrix(3, 3))
    const [result, setResult] = useState(getZeroMatrix(3, 3))
    const id = v1()

    useEffect(() => {
        setResult(subtract(matrix1, matrix2))
    }, [matrix1, matrix2])

    return (
        <Draggable>
            <div style={{ top: props.top ?? 0, left: props.left ?? 0 }} id={id} className='Subtraction'>
                <div className='top'>
                    <h2 className='header'>Subtraction</h2>
                    <button onClick={() => { document.getElementById(id).classList.add('hidden') }} className='exit'>X</button>
                </div>
                <div className='Subtraction-desktop'>
                    <Input
                        onDecreaseRows={() => setMatrix2(removeLastRow(matrix2))}
                        onIncreaseRows={() => setMatrix2(addZeroRow(matrix2))}
                        onDecreaseColumns={() => setMatrix2(removeLastColumn(matrix2))}
                        onIncreaseColumns={() => setMatrix2(addZeroColumn(matrix2))}
                        value={matrix1}
                        onChange={(matrix) => setMatrix1(matrix)} />
                    <span>+</span>
                    <Input
                        onDecreaseRows={() => setMatrix1(removeLastRow(matrix1))}
                        onIncreaseRows={() => setMatrix1(addZeroRow(matrix1))}
                        onDecreaseColumns={() => setMatrix1(removeLastColumn(matrix1))}
                        onIncreaseColumns={() => setMatrix1(addZeroColumn(matrix1))}
                        value={matrix2}
                        onChange={(matrix) => setMatrix2(matrix)} />
                    <span>=</span>
                    <Input
                        value={result}
                        disabled={true} />
                </div>
            </div>
        </Draggable>
    )
}

export default Subtraction