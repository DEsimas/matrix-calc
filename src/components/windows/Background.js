import { v1 } from 'uuid'
import React from 'react'
import Draggable from 'react-draggable'

import './Background.css'

const Background = (props) => {
    const id = v1()

    return (
        <Draggable>
            <div id={id} className='background'>
                <header className='background-header'>
                    <h2>{props.title}</h2>
                    <span onClick={() => document.getElementById(id).classList.add('hidden')}>X</span>
                </header>
                {props.children}
            </div>
        </Draggable>
    )
}

export default Background