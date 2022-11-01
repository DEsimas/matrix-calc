import React from 'react'
import Input from './components/Input'
import './normalize.css'

const App = () => {
    function m(matrix) {
        console.log(matrix)
    }

    return (
        <Input onChange={m} />
    )
}

export default App