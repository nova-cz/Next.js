//Tenemos que especificar si es un componente cliente o un componente servidor
"use client"

import React from 'react'

const hello = () => {
    console.log("I am a a Client Component")
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default hello
