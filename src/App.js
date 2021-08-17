import React from 'react'
import logo from './componentes/img/logo.png'


export default function App(){
  const canal =() => {
    return 'Curso de React'
  } 

  function curso() {
    return 'Curso de React'
  }

  return(
    <>
    <header>
        <p>{'canal : ' + canal()}</p>       
        <p>{curso()}</p>
    </header>    

    <section>
        <img src={logo}/>     
        <img src='/img/eu.jpg'  /> 
    </section>  
      
    </>
  )
}

