import React, { useState } from 'react'

import Table from './components/Table/Table'

import './normalize.css'
import './App.css'

const App = () => {
    const [elements, setElements] = useState([])

    const addElement = (element) => {
        elements.push(element)
        setElements([...elements])
    }

    return (
        <>
            <Table addElement={addElement} />
            <div className='elements'>
                {elements.map(el => (el))}
            </div>
        </>
    )
}

export default App