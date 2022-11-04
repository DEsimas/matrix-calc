import { v1 } from 'uuid'
import React, { useState } from 'react'

import Addition from './Addition'
import Transpose from './Transpose'
import Subtraction from './Subtraction'
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
                <button onClick={() => props.addElement((<Transpose key={v1()} />))}>Transpose</button>
                <button onClick={() => props.addElement((<Multiplication key={v1()} />))}>Multiplication</button>
                <button onClick={() => props.addElement((<Addition key={v1()} />))}>Addition</button>
                <button onClick={() => props.addElement((<Subtraction key={v1()} />))}>Subtraction</button>
            </div>
        </div>
    )
}

export default Table