import React, { useState } from 'react'
import Transpose from './Transpose'
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
                <span className='table-header-arrow'>{collapsed ? '[open]' : '[close]'}</span>
            </div>
            <div className={'list ' + (collapsed ? 'hidden' : '')}>
                <button onClick={() => props.addElement((<Transpose />))}>Transpose</button>
            </div>
        </div>
    )
}

export default Table