import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { v1 } from 'uuid'
import { getZeroMatrix, transpose } from '../Matrix'
import Input from './Input'
import './Transpose.css'

const Transpose = (props) => {
    const [matrix1, setMatrix1] = useState(getZeroMatrix(3, 3))
    const [matrix2, setMatrix2] = useState(getZeroMatrix(3, 3))
    const id = v1()

    return (
        <Draggable>
            <div style={{ top: props.top ?? 0, left: props.left ?? 0 }} id={id} className='transpose'>
                <div className='top'>
                    <h2 className='header'>Transpose</h2>
                    <button onClick={() => { document.getElementById(id).classList.add('hidden') }} className='exit'>X</button>
                </div>
                <div className='transpose-desktop'>
                    <div className='transpose-input'>
                        <Input value={matrix1} onChange={(matrix) => {
                            setMatrix2(transpose(matrix))
                        }} />
                        <span className='transpose-span'>T</span>
                    </div>
                    <span>=</span>
                    <Input value={matrix2} onChange={(matrix) => {
                        setMatrix1(transpose(matrix))
                    }} />
                </div>
            </div>
        </Draggable>
    )
}

export default Transpose