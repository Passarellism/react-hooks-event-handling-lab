// Code Keypad Component Here
import React from 'react'
// create keypad react component
// render an input with the right type
// on that input, add event handler that listens for the change event
// when even fires, use console.log to pirnt out text 'Entering password...'

function Keypad (){
    function eventListener(){
        console.log('Entering password...')
    }
    return (
        <input onChange={eventListener} type="password" />
    )
}

export default Keypad;