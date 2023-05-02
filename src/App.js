import React, { useState, useEffect } from 'react'

import Table from './components/table/Table.js'

import './normalize.css'
import './App.css'

const App = () => {
    const [elements, setElements] = useState([])
    const [width, setWidth] = useState(window.innerWidth);

    function addElement(element) {
        elements.push(element)
        setElements([...elements])
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if (width <= 768) return (
        <div className='mobile'>
            This application doesn't have a mobile version.
        </div>
    )

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