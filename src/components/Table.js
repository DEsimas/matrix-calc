import React, { useState } from 'react'
import Transpose from './Transpose'
import Multiplication from './Multiplication'
import './Table.css'

const Table = (props) => {
    const [collapsed, setCollapsed] = useState(false)

    function toggleCollapsed() {
        setCollapsed(!collapsed)
    }

    return (
        <div className='table'>
            <div onClick={() => toggleCollapsed()} className='table-header'>
                <h2>Operations</h2>
                <img
                    style={{
                        transform: collapsed ? 'rotate(180deg)' : 'rotate(90deg)',
                        transition: 'transform 150ms ease',
                    }}
                    width={35} src='https://cdn-icons-png.flaticon.com/512/271/271228.png'
                    className='table-header-arrow' />
            </div>
            <div className={'list ' + (collapsed ? 'hidden' : '')}>
                <button onClick={() => props.addElement((<Transpose />))}>Transpose</button>
                <button onClick={() => props.addElement((<Multiplication />))}>Multiplication</button>
            </div>
        </div>
    )
}

export default Table