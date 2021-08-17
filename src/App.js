import React from 'react'

export default function App(){
  const canal =() => {
    return 'Curso de React'
  } 

  function curso() {
    return 'Curso de React'
  }

  return(
    <>
        <p>{'canal: ' + canal()}</p>       
        <p>{curso()}</p>
    </>
  )
}

