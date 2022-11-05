import React, { useState } from 'react'
import './normalize.css'
import './App.css'
import Table from './components/Table'
import SingleMatrix from './components/windows/SingleMatrix'
import { Matrix } from './matrix/Matrix'

const App = () => {
    return (
        <>
            <SingleMatrix title={'Transpose'} operation={Matrix.transpose} span={'T'} />
        </>
    )
}

export default App