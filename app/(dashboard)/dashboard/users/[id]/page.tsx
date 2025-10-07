import React from 'react'

const page = ({params}: {params: {id: string}}) => {
    //Para poder extraer informacion dle usuario nos apoyaremos de params
    //que son los parametros que vienen de la URL

    const{id} = params;

    return (
        <h1 className='text-3xl'>User profile {id}</h1>
    )
}

export default page
