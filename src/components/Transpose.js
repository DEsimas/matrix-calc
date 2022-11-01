import React, { useEffect, useState } from 'react'
import { getZeroMatrix, transpose } from '../Matrix'
import Input from './Input'
import './Transpose.css'

const Transpose = (props) => {
    const [matrix1, setMatrix1] = useState(getZeroMatrix(3, 3))
    const [matrix2, setMatrix2] = useState(getZeroMatrix(3, 3))
    const [isMoving, setIsMoving] = useState(false)
    const [position, setPosition] = useState({ top: props.top ?? 0, left: props.left ?? 0 })

    return (
        <div onMouseDown={(e) => { setIsMoving(true) }} onMouseUp={() => { setIsMoving(false) }}
            onMouseMove={(e) => {
                if (isMoving) {
                    setPosition({ top: position.top + e.movementY, left: position.left + e.movementX })
                }
            }}
            onMouseLeave={() => setIsMoving(false)}
            style={{ position: 'absolute', ...position }} className='transpose'>
            <div className='transpose-top'>
                <h2 className='transpose-header'>Transpose</h2>
                <button onClick={typeof props.onClose == 'function' && props.onClose()} className='transpose-exit'>X</button>
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
    )
}

export default Transpose