// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    return <button onBlur={() => console.log("Hey! Eyes on me!")} onFocus={() => console.log("Good!")}>Eyes on me</button>
}

export default EyesOnMe;