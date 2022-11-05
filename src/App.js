import React, { useState } from 'react'
import './normalize.css'
import './App.css'
import Table from './components/Table'
import MatrixNumber from './components/windows/MatrixNumber'
import { Matrix } from './matrix/Matrix'

const App = () => {
    return (
        <>
            <MatrixNumber title={'Divide'} operation={Matrix.divideByNumber} span={'/'} />
        </>
    )
}

export default App