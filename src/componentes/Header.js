import React from 'react'
import logo from './img/logo.png'

export default function Header(){
    return (
        <header>
            <img src={logo}/>
            <h1>CFB Cursos</h1>
        </header>
    )
}