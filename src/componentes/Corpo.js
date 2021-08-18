import React from 'react'
import Dados from './Dados'

export default function Corpo(){
  const cnl = 'CFB Cursos'
  const yt = 'CFB'
  const crs = 'React.js'


    return(
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva</p>
            <p>Ative o sininho</p>

            <Dados 
    canal = {cnl}
    youtube = {yt}
    curso = {crs}
    />  
        </section>
    )
}