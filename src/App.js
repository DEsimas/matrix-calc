import React, { useState } from 'react'
import './normalize.css'
import './App.css'
import Table from './components/Table'

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