import { v1 } from 'uuid'
import React, { useState } from 'react'

import { Matrix } from './../../matrix/Matrix.js'
import DoubleMatrix from '../windows/DoubleMatrix.js'
import MatrixNumber from '../windows/MatrixNumber.js'

import './Table.css'
import SingleMatrix from '../windows/SingleMatrix.js'
import MatrixToNumber from '../windows/MatrixToNumber.js'

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
                    alt={collapsed ? "show" : "hide"}
                    style={{
                        transform: collapsed ? 'rotate(180deg)' : 'rotate(90deg)',
                        transition: 'transform 150ms ease',
                    }}
                    width={35} src='https://cdn-icons-png.flaticon.com/512/271/271228.png'
                    className='table-header-arrow' />
            </div>
            <div className={'list ' + (collapsed ? 'hidden' : '')}>
                <button onClick={
                    () => props.addElement((<DoubleMatrix operation={Matrix.multiply} span={'×'} title={'Multiply matrices'} key={v1()} />))
                }>Multiply matrices</button>
                <button onClick={
                    () => props.addElement((<DoubleMatrix operation={Matrix.add} span={'+'} title={'Add matrices'} key={v1()} />))
                }>Add matrices</button>
                <button onClick={
                    () => props.addElement((<MatrixNumber operation={Matrix.addNumber} span={'+'} title={'Add number'} key={v1()} />))
                }>Add number</button>
                <button onClick={
                    () => props.addElement((<MatrixNumber operation={Matrix.subtractNumber} span={'-'} title={'Subtract number'} key={v1()} />))
                }>Subtract number</button>
                <button onClick={
                    () => props.addElement((<MatrixNumber operation={Matrix.multiplyByNumber} span={'×'} title={'Multyply by number'} key={v1()} />))
                }>Multyply by number</button>
                <button onClick={
                    () => props.addElement((<MatrixNumber operation={Matrix.divideByNumber} span={'/'} title={'Divide by number'} key={v1()} />))
                }>Divide by number</button>
                <button onClick={
                    () => props.addElement((<SingleMatrix operation={Matrix.transpose} span={'T'} title={'Transpose'} key={v1()} />))
                }>Transpose</button>
                <button onClick={
                    () => props.addElement((<SingleMatrix operation={Matrix.invert} span={'-1'} title={'Invert'} key={v1()} />))
                }>Invert</button>
                <button onClick={
                    () => props.addElement((<MatrixToNumber operation={Matrix.determinant} span={'det'} title={'Determinant'} key={v1()} />))
                }>Determinant</button>
                <button onClick={
                    () => props.addElement((<SingleMatrix operation={Matrix.adjugate} span={''} title={'Adjugate'} key={v1()} />))
                }>Adjugate</button>
            </div>
        </div>
    )
}

export default Table