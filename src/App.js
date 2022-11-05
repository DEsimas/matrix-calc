import React, { useState } from 'react'
import './normalize.css'
import './App.css'
import Table from './components/Table'
import MatrixNumber from './components/windows/MatrixNumber'
import { Matrix } from './matrix/Matrix'
import DoubleMatrix from './components/windows/DoubleMatrix'

const App = () => {
    return (
        <>
            <DoubleMatrix title={'Add'} operation={Matrix.add} span={'+'} />
        </>
    )
}

export default App