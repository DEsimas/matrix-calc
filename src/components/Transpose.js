import React from 'react'
import Input from './Input'

const Transpose = () => {
    return (
        <div className='transpose'>
            <h2>Transpose</h2>
            <div className='transpose-input'>
                <Input />
            </div>
            <span>T</span>
            <span>=</span>
            <Input />
        </div>
    )
}

export default Transpose