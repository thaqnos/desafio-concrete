import React from 'react'
import Input from '../../componentes/Input'
import Button from '../../componentes/Button'
import './style.css'

const PaginaInicial = (props) => {
    return (
        <main>
            <h1> <span className='span-titulo__home'>Github</span> <span className='span-subtitulo__home'>Search</span></h1>
            <div className='input__div'>
            <Input classe='input__home'/>
            <Button classe='button__home' />
            </div>
        </main>
    )
}

export default PaginaInicial